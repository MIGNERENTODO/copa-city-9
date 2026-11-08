// Panel privado: respaldo de carnets de Fanáticos, ranking por mes y pronósticos.
// Todas las acciones requieren la clave ADMIN_KEY (encabezado x-clave).
// GET -> { carnets, periodo, periodos: [{ id, top }], pronosticos }
// POST { accion, ... }
//   anular { cod } / reactivar { cod }   suspende o devuelve un carnet (sale o vuelve al ranking)
//   liquidar { key, ganador }            da los puntos de acierto de un juego ("empate" no da puntos)
const crypto = require("crypto");
const { pipe, cuerpo, enviar, fallo } = require("./_db");
const X = require("./_fan");
const { K, F } = X;

function autorizado(req) {
  const clave = process.env.ADMIN_KEY || "", dada = String(req.headers["x-clave"] || "");
  if (!clave || !dada) return false;
  const a = crypto.createHash("sha256").update(clave).digest(), b = crypto.createHash("sha256").update(dada).digest();
  return crypto.timingSafeEqual(a, b);
}
function pares(arr) { const o = []; for (let i = 0; i + 1 < (arr || []).length; i += 2) o.push([arr[i], parseInt(arr[i + 1], 10) || 0]); return o; }

async function leer() {
  const per = F.periodo().id;
  const [cods, mes, temp, pers, pk] = await pipe([
    ["ZRANGE", K("todos"), 0, -1],
    ["ZRANGE", K("r:" + per), 0, -1, "WITHSCORES"],
    ["ZRANGE", K("r:temp"), 0, -1, "WITHSCORES"],
    ["SMEMBERS", K("periodos")],
    ["SMEMBERS", K("prkeys")]
  ]);
  const fichas = (cods || []).length ? await pipe(cods.map(c => ["HGETALL", K(c)])) : [];
  const pm = {}, pt = {}; pares(mes).forEach(x => { pm[x[0]] = x[1]; }); pares(temp).forEach(x => { pt[x[0]] = x[1]; });
  const carnets = (cods || []).map((c, i) => {
    const f = X.ficha(fichas[i]) || {};
    return { cod: c, n: parseInt(f.n, 10) || 0, nombre: f.nombre || "", equipo: f.equipo || "", wa: f.wa || "", ig: f.ig || "", fecha: f.fecha || "",
      ref: f.ref || "", racha: parseInt(f.racha, 10) || 0, mes: pm[c] || 0, temporada: pt[c] || 0, anulado: f.anul === "1" };
  });
  const ids = (pers || []).slice().sort().reverse().slice(0, 12);
  const tops = ids.length ? await pipe(ids.map(id => ["ZREVRANGE", K("r:" + id), 0, 9, "WITHSCORES"])) : [];
  const periodos = ids.map((id, i) => ({ id, nombre: F.nombrePeriodo(id), top: pares(tops[i]).map(x => ({ cod: x[0], pts: x[1] })) }));
  const keys = (pk || []).filter(k => F.leerKey(k)).sort().reverse().slice(0, 60);
  const pr = keys.length ? await pipe(keys.flatMap(k => [["HGETALL", K("prc:" + k)], ["GET", K("prl:" + k)]])) : [];
  const pronosticos = keys.map((k, i) => { const c = X.ficha(pr[i * 2]) || {}; const o = {}; Object.keys(c).forEach(e => { o[e] = parseInt(c[e], 10) || 0; });
    return Object.assign({ key: k, conteo: o, liquidado: pr[i * 2 + 1] || "" }, F.leerKey(k)); });
  return { carnets, periodo: F.periodo(), periodos, pronosticos };
}

async function anular(cod, si) {
  if (!X.codOk(cod)) return [400, { error: "Código no válido" }];
  const [raw] = await pipe([["HGETALL", K(cod)]]);
  const f = X.ficha(raw); if (!f) return [404, { error: "No existe ese carnet" }];
  if ((f.anul === "1") === si) return [200, { ok: true }];
  const per = F.periodo().id;
  const [pm, pt] = await pipe([["ZSCORE", K("r:" + per), cod], ["ZSCORE", K("r:temp"), cod]]);
  const cmds = [["HSET", K(cod), "anul", si ? "1" : "0"]];
  if (si) {
    // guarda sus puntos para devolverlos si se reactiva y lo saca del ranking y de su hinchada
    cmds.push(["HSET", K(cod), "anulMes", per + ":" + (parseInt(pm, 10) || 0), "anulTemp", parseInt(pt, 10) || 0]);
    cmds.push(["ZREM", K("r:" + per), cod], ["ZREM", K("r:temp"), cod]);
    if (f.equipo && pm) cmds.push(["ZINCRBY", K("re:" + per), -(parseInt(pm, 10) || 0), f.equipo]);
  } else {
    const am = String(f.anulMes || "").split(":"), m = parseInt(am[1], 10) || 0, t = parseInt(f.anulTemp, 10) || 0;
    if (am[0] === per && m) { cmds.push(["ZADD", K("r:" + per), m, cod]); if (f.equipo) cmds.push(["ZINCRBY", K("re:" + per), m, f.equipo]); }
    if (t) cmds.push(["ZADD", K("r:temp"), t, cod]);
  }
  await pipe(cmds);
  return [200, { ok: true }];
}

async function liquidar(key, ganador) {
  const j = F.leerKey(key); if (!j) return [400, { error: "Juego no válido" }];
  if (ganador !== "empate" && ganador !== j.visita && ganador !== j.local) return [400, { error: "Elige el ganador" }];
  const [ya] = await pipe([["SET", K("prl:" + key), ganador, "NX"]]);
  if (ya !== "OK") return [409, { error: "Este juego ya tenía puntos entregados" }];
  if (ganador === "empate") return [200, { ok: true, premiados: 0 }];
  const [picks] = await pipe([["HGETALL", K("pr:" + key)]]);
  const p = X.ficha(picks) || {};
  const acertaron = Object.keys(p).filter(c => p[c] === ganador);
  const fichas = acertaron.length ? await pipe(acertaron.map(c => ["HGETALL", K(c)])) : [];
  let n = 0;
  for (let i = 0; i < acertaron.length; i++) {
    const f = X.ficha(fichas[i]); if (!f || f.anul === "1") continue;
    f.cod = acertaron[i];
    await X.sumar(f, F.PUNTOS.acierto, "Acertaste: " + j.visita + " vs " + j.local); n++;
  }
  return [200, { ok: true, premiados: n }];
}

module.exports = async (req, res) => {
  try {
    if (!process.env.ADMIN_KEY) return enviar(res, 503, { error: "Falta configurar ADMIN_KEY en Vercel." });
    if (!autorizado(req)) return enviar(res, 401, { error: "Clave incorrecta" });
    if (req.method === "GET") return enviar(res, 200, await leer());
    if (req.method !== "POST") return enviar(res, 405, { error: "Método no permitido" });
    const b = cuerpo(req);
    let r = [400, { error: "Acción no válida" }];
    if (b.accion === "anular") r = await anular(String(b.cod || ""), true);
    else if (b.accion === "reactivar") r = await anular(String(b.cod || ""), false);
    else if (b.accion === "liquidar") r = await liquidar(String(b.key || ""), String(b.ganador || ""));
    return enviar(res, r[0], r[1]);
  } catch (e) { return fallo(res, e); }
};
