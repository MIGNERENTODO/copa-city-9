// Fanáticos de la Copa City 9: carnet, puntos, pronósticos y ranking.
// GET  /api/fanatico?ranking=1          -> ranking del mes (fanáticos e hinchadas) y ganador del mes anterior
// GET  /api/fanatico?pron=key1,key2     -> cuántos fanáticos eligieron a cada equipo en esos juegos
// POST /api/fanatico { accion, ... }
//   registrar { nombre, equipo, wa, ig, bases, ref }  saca el carnet; devuelve { cod, tk, perfil }
//   entrar    { cod, wa4 }                            recupera el carnet en otro teléfono (código + últimos 4 dígitos)
//   yo        { cod, tk }                             perfil y punto diario por entrar
//   pronostico{ cod, tk, key, equipo }                elige quién gana un juego antes del primer lanzamiento
const { pipe, huella, cuerpo, enviar, fallo, P } = require("./_db");
const X = require("./_fan");
const { K, F } = X;

async function limite(req, nombre, max, seg) {
  const k = P + "hf:lim:" + nombre + ":" + huella(req);
  const [c] = await pipe([["INCR", k], ["EXPIRE", k, seg]]);
  return (parseInt(c, 10) || 0) > max;
}

function lista(arr) { // zrange WITHSCORES -> [{id, pts}]
  const out = [];
  for (let i = 0; i + 1 < (arr || []).length; i += 2) out.push({ id: arr[i], pts: parseInt(arr[i + 1], 10) || 0 });
  return out;
}

async function ranking() {
  const per = F.periodo(), ant = F.periodoAnterior();
  const [top, eqs, total, topAnt] = await pipe([
    ["ZREVRANGE", K("r:" + per.id), 0, 19, "WITHSCORES"],
    ["ZREVRANGE", K("re:" + per.id), 0, -1, "WITHSCORES"],
    ["ZCARD", K("todos")],
    ["ZREVRANGE", K("r:" + ant.id), 0, 0, "WITHSCORES"]
  ]);
  const T = lista(top), A = lista(topAnt).filter(x => x.pts > 0);
  const cods = T.map(x => x.id).concat(A.map(x => x.id));
  const fichas = cods.length ? await pipe(cods.map(c => ["HMGET", K(c), "nombre", "equipo", "n"])) : [];
  const dato = i => ({ nombre: (fichas[i] || [])[0] || "Fanático", equipo: (fichas[i] || [])[1] || "", n: parseInt((fichas[i] || [])[2], 10) || 0 });
  const porEq = {}; lista(eqs).forEach(x => { porEq[x.id] = x.pts; });
  return {
    periodo: per,
    fanaticos: T.map((x, i) => Object.assign({ pts: x.pts }, dato(i))).filter(x => x.pts > 0).map((x, i) => Object.assign(x, { pos: i + 1 })),
    hinchadas: X.EQUIPOS.map(id => ({ equipo: id, pts: porEq[id] || 0 })).sort((a, b) => b.pts - a.pts),
    inscritos: parseInt(total, 10) || 0,
    anterior: A.length ? Object.assign({ periodo: ant.id, nombrePeriodo: F.nombrePeriodo(ant.id), premio: ant.premio, pts: A[0].pts }, dato(T.length)) : null
  };
}

async function conteos(keys) {
  const r = await pipe(keys.map(k => ["HGETALL", K("prc:" + k)]));
  const out = {};
  keys.forEach((k, i) => { const f = X.ficha(r[i]) || {}; const o = {}; Object.keys(f).forEach(e => { o[e] = parseInt(f[e], 10) || 0; }); out[k] = o; });
  return out;
}

async function registrar(req, b) {
  if (await limite(req, "reg", 6, 3600)) return [429, { error: "Demasiados intentos. Prueba de nuevo en una hora." }];
  const nombre = X.limpiarTexto(b.nombre, 30), wa = X.limpiarWA(b.wa), ig = X.limpiarIG(b.ig), equipo = String(b.equipo || "");
  if (nombre.length < 3) return [400, { error: "Escribe tu nombre o apodo (al menos 3 letras).", campo: "nombre" }];
  if (X.EQUIPOS.indexOf(equipo) < 0) return [400, { error: "Elige tu equipo.", campo: "equipo" }];
  if (!wa) return [400, { error: "Escribe un WhatsApp válido, por ejemplo +56 9 1234 5678.", campo: "wa" }];
  if (!ig) return [400, { error: "Escribe tu usuario de Instagram, por ejemplo @copacity9.", campo: "ig" }];
  if (b.bases !== true) return [400, { error: "Para participar hay que aceptar las bases.", campo: "bases" }];

  let cod = "";
  for (let i = 0; i < 6 && !cod; i++) { const c = X.nuevoCodigo(nombre); const [ok] = await pipe([["HSETNX", K(c), "nombre", nombre]]); if (ok === 1 || ok === "1") cod = c; }
  if (!cod) return [500, { error: "No se pudo crear el carnet. Intenta de nuevo." }];
  const [due] = await pipe([["SET", K("wa:" + wa), cod, "NX"]]);
  if (due !== "OK") { await pipe([["DEL", K(cod)]]); return [409, { error: "Ese WhatsApp ya tiene un carnet. Entra con tu código para recuperarlo.", campo: "wa", existe: true }]; }

  const tk = X.nuevoToken(), fecha = new Date().toISOString(), dia = X.hoy();
  const [n] = await pipe([["INCR", K("n")]]);
  let ref = X.codOk(b.ref) && b.ref !== cod ? b.ref : "";
  await pipe([
    ["HSET", K(cod), "n", n, "nombre", nombre, "equipo", equipo, "wa", wa, "ig", ig, "fecha", fecha, "tk", X.tkHash(tk), "racha", 1, "ult", dia, "pts", 0, "ref", ref],
    ["ZADD", K("todos"), n, cod],
    ["SET", K("d:" + cod + ":" + dia), 1, "EX", 60 * 60 * 48]
  ]);
  const f = { cod, n, nombre, equipo, wa, ig, fecha, racha: "1" };
  await X.sumar(f, F.PUNTOS.visita, "Entraste hoy");
  if (ref) { // el amigo que lo invitó gana puntos
    const [h] = await pipe([["HGETALL", K(ref)]]);
    const fr = X.ficha(h);
    if (fr && fr.anul !== "1" && fr.wa !== wa) { fr.cod = ref; await X.sumar(fr, F.PUNTOS.inscrito, nombre + " sacó su carnet con tu enlace"); }
  }
  return [200, { ok: true, cod, tk, perfil: await X.perfil(f) }];
}

async function entrar(req, b) {
  if (await limite(req, "entrar", 10, 3600)) return [429, { error: "Demasiados intentos. Prueba de nuevo en una hora." }];
  const cod = String(b.cod || "").toUpperCase().replace(/[^A-Z0-9]/g, ""), wa4 = String(b.wa4 || "").replace(/\D/g, "");
  if (!X.codOk(cod) || wa4.length !== 4) return [400, { error: "Escribe tu código de carnet y los últimos 4 dígitos de tu WhatsApp." }];
  const [h] = await pipe([["HGETALL", K(cod)]]);
  const f = X.ficha(h);
  if (!f || !f.wa || f.wa.slice(-4) !== wa4) return [404, { error: "El código o los dígitos no coinciden." }];
  if (f.anul === "1") return [403, { error: "Este carnet está suspendido. Escribe a la liga por el buzón." }];
  const tk = X.nuevoToken(); // el teléfono anterior deja de sumar puntos
  await pipe([["HSET", K(cod), "tk", X.tkHash(tk)]]);
  f.cod = cod;
  return [200, { ok: true, cod, tk, perfil: await X.perfil(f) }];
}

async function yo(b) {
  const f = await X.verificar(b.cod, b.tk);
  if (!f) return [401, { error: "Carnet no válido", salir: true }];
  const dia = X.hoy();
  const [nuevo] = await pipe([["SET", K("d:" + f.cod + ":" + dia), 1, "NX", "EX", 60 * 60 * 48]]);
  const ganados = [];
  if (nuevo === "OK") {
    const ayer = X.hoy(new Date(Date.now() - 864e5));
    let racha = f.ult === ayer ? (parseInt(f.racha, 10) || 0) + 1 : (f.ult === dia ? (parseInt(f.racha, 10) || 1) : 1);
    await pipe([["HSET", K(f.cod), "racha", racha, "ult", dia]]);
    f.racha = String(racha);
    ganados.push({ m: "Entraste hoy", p: await X.sumar(f, F.PUNTOS.visita, "Entraste hoy") });
    if (racha > 1 && racha % 7 === 0) ganados.push({ m: racha + " días seguidos", p: await X.sumar(f, F.PUNTOS.racha, "Racha de " + racha + " días seguidos") });
  }
  const per = await X.perfil(f);
  const prog = F.juegosProgramados(await X.programacion()).filter(j => j.inicio && j.inicio.getTime() > Date.now() - 7 * 864e5);
  if (prog.length) {
    const r = await pipe(prog.map(j => ["HGET", K("pr:" + j.key), f.cod]));
    per.picks = {}; prog.forEach((j, i) => { if (r[i]) per.picks[j.key] = r[i]; });
  }
  return [200, { ok: true, perfil: per, ganados }];
}

async function pronostico(b) {
  const f = await X.verificar(b.cod, b.tk);
  if (!f) return [401, { error: "Saca tu carnet para pronosticar", salir: true }];
  const juego = F.juegosProgramados(await X.programacion()).find(j => j.key === b.key);
  if (!juego) return [404, { error: "Ese juego no está programado" }];
  if (!juego.inicio || Date.now() >= juego.inicio.getTime()) return [403, { error: "El juego ya empezó: los pronósticos cerraron" }];
  if (b.equipo !== juego.visita && b.equipo !== juego.local) return [400, { error: "Elige uno de los dos equipos" }];
  const [antes] = await pipe([["HGET", K("pr:" + juego.key), f.cod]]);
  if (antes === b.equipo) return [200, { ok: true, pts: 0, conteo: (await conteos([juego.key]))[juego.key] }];
  const cmds = [["HSET", K("pr:" + juego.key), f.cod, b.equipo], ["HINCRBY", K("prc:" + juego.key), b.equipo, 1], ["SADD", K("prkeys"), juego.key]];
  if (antes) cmds.push(["HINCRBY", K("prc:" + juego.key), antes, -1]);
  await pipe(cmds);
  let pts = 0;
  if (!antes) pts = await X.sumar(f, F.PUNTOS.pronostico, "Pronóstico: " + juego.visita + " vs " + juego.local);
  return [200, { ok: true, pts, cambio: !!antes, conteo: (await conteos([juego.key]))[juego.key] }];
}

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const q = new URL(req.url, "http://x").searchParams;
      if (q.get("pron")) {
        const keys = q.get("pron").split(",").filter(k => F.leerKey(k)).slice(0, 20);
        res.setHeader("CDN-Cache-Control", "public, s-maxage=10");
        return enviar(res, 200, { conteo: keys.length ? await conteos(keys) : {} });
      }
      res.setHeader("CDN-Cache-Control", "public, s-maxage=15");
      return enviar(res, 200, await ranking());
    }
    if (req.method !== "POST") return enviar(res, 405, { error: "Método no permitido" });
    const b = cuerpo(req);
    const fn = { registrar: () => registrar(req, b), entrar: () => entrar(req, b), yo: () => yo(b), pronostico: () => pronostico(b) }[b.accion];
    if (!fn) return enviar(res, 400, { error: "Acción no válida" });
    const [st, data] = await fn();
    return enviar(res, st, data);
  } catch (e) { return fallo(res, e); }
};
