// Panel privado del administrador. Todas las acciones requieren la clave ADMIN_KEY (encabezado x-clave).
// GET  -> visitas, sugerencias, votos, publicaciones, encuestas y resumen de estadísticas
// POST { accion, ... }:
//   borrar { id }                      borra una sugerencia
//   reiniciar { encuesta }             deja una encuesta en cero
//   foto { data }                      guarda una foto JPEG (base64) y devuelve su id
//   publicar { pub }                   crea o actualiza una publicación
//   borrarPub { id }                   borra una publicación
//   encuestas { lista }                guarda la lista completa de encuestas
//   estadisticas { datos }             guarda el respaldo del programa Anotador
//   programacion { lista }             guarda las jornadas programadas
//   galeria { lista }                  guarda las fotos de la galería [{ id, pie, fecha }]
const crypto = require("crypto");
const { pipe, hoy, cuerpo, idOk, hash2obj, enviar, fallo, P } = require("./_db");
const CIERRE = require("../datos/cierre.js");

function autorizado(req) {
  const clave = process.env.ADMIN_KEY || "";
  const dada = String(req.headers["x-clave"] || "");
  if (!clave || !dada) return false;
  const a = crypto.createHash("sha256").update(clave).digest(), b = crypto.createHash("sha256").update(dada).digest();
  return crypto.timingSafeEqual(a, b);
}
const txt = (s, max) => String(s == null ? "" : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, max);
const fotoOk = s => typeof s === "string" && /^[a-f0-9]{12,32}$/.test(s);
const TIPOS = ["opinion", "juego", "reunion", "jugador", "noticia"];

function limpiarPub(p) {
  const o = {
    id: idOk(p.id) ? p.id : crypto.randomBytes(5).toString("hex"),
    tipo: TIPOS.indexOf(p.tipo) >= 0 ? p.tipo : "noticia",
    titulo: txt(p.titulo, 160).trim(),
    bajada: txt(p.bajada, 400).trim(),
    autor: txt(p.autor, 80).trim(),
    fecha: /^\d{4}-\d{2}-\d{2}$/.test(p.fecha) ? p.fecha : hoy(),
    portada: fotoOk(p.portada) ? p.portada : "",
    equipo: idOk(p.equipo) ? p.equipo : "",
    jugador: txt(p.jugador, 80).trim(),
    linea: txt(p.linea, 120).trim(),
    borrador: !!p.borrador,
    bloques: []
  };
  (Array.isArray(p.bloques) ? p.bloques : []).slice(0, 80).forEach(b => {
    if (!b) return;
    if ((b.t === "p" || b.t === "h" || b.t === "cita") && txt(b.x, 6000).trim()) o.bloques.push({ t: b.t, x: txt(b.x, 6000).trim() });
    if (b.t === "img" && fotoOk(b.id)) o.bloques.push({ t: "img", id: b.id, pie: txt(b.pie, 200).trim() });
    if (b.t === "video") { const u = txt(b.url, 300).trim(); if (/^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be|instagram\.com)\//i.test(u)) o.bloques.push({ t: "video", url: u, pie: txt(b.pie, 200).trim() }); }
    if (b.t === "lista") { const it = (Array.isArray(b.items) ? b.items : []).map(x => txt(x, 600).trim()).filter(Boolean).slice(0, 40); if (it.length) o.bloques.push({ t: "lista", items: it }); }
  });
  return o;
}

function limpiarEncuesta(e) {
  if (!e || !idOk(e.id)) return null;
  const o = {
    id: e.id,
    tipo: ["mvp", "equipos", "opciones"].indexOf(e.tipo) >= 0 ? e.tipo : "opciones",
    pregunta: txt(e.pregunta, 200).trim(),
    descripcion: txt(e.descripcion, 400).trim(),
    estado: e.estado === "cerrada" ? "cerrada" : "abierta",
    creada: /^\d{4}-\d{2}-\d{2}$/.test(e.creada) ? e.creada : hoy()
  };
  if (/^\d{4}-\d{2}-\d{2}$/.test(e.fecha || "")) o.fecha = e.fecha;
  const c = CIERRE.cierreDe(e) || CIERRE.proximoCierre(new Date());
  o.cierra = c.toISOString();
  if (!o.pregunta) return null;
  if (e.tipo === "mvp" && e.candidatos === "auto") { o.candidatos = "auto"; o.fecha = /^\d{4}-\d{2}-\d{2}$/.test(e.fecha) ? e.fecha : ""; o.cantidad = Math.min(10, Math.max(2, parseInt(e.cantidad, 10) || 6)); }
  else {
    o.opciones = (Array.isArray(e.opciones) ? e.opciones : []).slice(0, 30).map((x, i) => ({
      id: idOk(x.id) ? x.id : "op" + (i + 1),
      texto: txt(x.texto, 120).trim(),
      equipo: idOk(x.equipo) ? x.equipo : "",
      linea: txt(x.linea, 120).trim()
    })).filter(x => x.texto);
    if (o.opciones.length < 2) return null;
  }
  return o;
}

async function leerLista(key) { const [x] = await pipe([["GET", key]]); try { return JSON.parse(x) || []; } catch (e) { return []; } }

module.exports = async (req, res) => {
  try {
    if (!process.env.ADMIN_KEY) return enviar(res, 503, { error: "Falta configurar ADMIN_KEY en Vercel." });
    if (!autorizado(req)) return enviar(res, 401, { error: "Clave incorrecta" });

    if (req.method === "POST") {
      const b = cuerpo(req);
      switch (b.accion) {
        case "borrar": {
          if (typeof b.id !== "string") break;
          const [lista] = await pipe([["LRANGE", P + "sugerencias", 0, -1]]);
          const crudo = (lista || []).find(x => { try { return JSON.parse(x).id === b.id; } catch (e) { return false; } });
          if (crudo) await pipe([["LREM", P + "sugerencias", 1, crudo]]);
          return enviar(res, 200, { ok: true });
        }
        case "reiniciar": {
          if (!idOk(b.encuesta)) break;
          await pipe([["DEL", P + "votos:" + b.encuesta], ["DEL", P + "votosdia:" + b.encuesta]]);
          return enviar(res, 200, { ok: true });
        }
        case "foto": {
          const data = String(b.data || "").replace(/^data:image\/jpeg;base64,/, "");
          if (!/^[A-Za-z0-9+/=]+$/.test(data) || data.length < 100) return enviar(res, 400, { error: "La foto no es válida" });
          if (data.length > 1400000) return enviar(res, 413, { error: "La foto es demasiado pesada" });
          const id = crypto.createHash("sha256").update(data).digest("hex").slice(0, 20);
          await pipe([["SET", P + "foto:" + id, data]]);
          return enviar(res, 200, { ok: true, id });
        }
        case "publicar": {
          const pub = limpiarPub(b.pub || {});
          if (!pub.titulo) return enviar(res, 400, { error: "Falta el título" });
          const lista = await leerLista(P + "publicaciones");
          const i = lista.findIndex(x => x.id === pub.id);
          if (i >= 0) lista[i] = pub; else lista.unshift(pub);
          lista.sort((a, c) => String(c.fecha).localeCompare(String(a.fecha)));
          await pipe([["SET", P + "publicaciones", JSON.stringify(lista.slice(0, 400))]]);
          return enviar(res, 200, { ok: true, pub });
        }
        case "borrarPub": {
          if (!idOk(b.id)) break;
          const lista = (await leerLista(P + "publicaciones")).filter(x => x.id !== b.id);
          await pipe([["SET", P + "publicaciones", JSON.stringify(lista)]]);
          return enviar(res, 200, { ok: true });
        }
        case "encuestas": {
          const lista = (Array.isArray(b.lista) ? b.lista : []).map(limpiarEncuesta).filter(Boolean).slice(0, 60);
          const cmds = [["SET", P + "encuestas:conf", JSON.stringify(lista)]];
          let ocultas = null;
          if (Array.isArray(b.ocultas)) { ocultas = b.ocultas.filter(idOk).slice(0, 300); cmds.push(["SET", P + "encuestas:ocultas", JSON.stringify(ocultas)]); }
          await pipe(cmds);
          return enviar(res, 200, { ok: true, lista, ocultas });
        }
        case "programacion": {
          const lista = (Array.isArray(b.lista) ? b.lista : []).slice(0, 60).map(j => ({
            n: parseInt(j.n, 10) || 0,
            fecha: /^\d{4}-\d{2}-\d{2}$/.test(j.fecha) ? j.fecha : "",
            partidos: (Array.isArray(j.partidos) ? j.partidos : []).slice(0, 12)
              .filter(x => Array.isArray(x) && idOk(x[0]) && idOk(x[1]) && x[0] !== x[1])
              .map(x => [x[0], x[1], /^\d{1,2}:\d{2}$/.test(x[2] || "") ? x[2] : ""])
          })).filter(j => j.n && j.fecha);
          await pipe([["SET", P + "programacion", JSON.stringify(lista)]]);
          return enviar(res, 200, { ok: true, lista });
        }
        case "galeria": {
          const lista = (Array.isArray(b.lista) ? b.lista : []).slice(0, 500)
            .filter(x => x && fotoOk(x.id))
            .map(x => ({ id: x.id, pie: txt(x.pie, 160).trim(), fecha: /^\d{4}-\d{2}-\d{2}$/.test(x.fecha) ? x.fecha : hoy() }));
          await pipe([["SET", P + "galeria", JSON.stringify(lista)]]);
          return enviar(res, 200, { ok: true, lista });
        }
        case "estadisticas": {
          const d = b.datos;
          if (!d || !Array.isArray(d.equipos) || !Array.isArray(d.jugadores) || !Array.isArray(d.juegos))
            return enviar(res, 400, { error: "El archivo no parece un respaldo del programa Anotador" });
          const limpio = { torneo: txt(d.torneo, 120), formato: d.formato || 2, equipos: d.equipos, jugadores: d.jugadores, juegos: d.juegos };
          const s = JSON.stringify(limpio);
          if (s.length > 3500000) return enviar(res, 413, { error: "El archivo es demasiado grande" });
          await pipe([["SET", P + "estadisticas", s], ["SET", P + "estadisticas:fecha", new Date().toISOString()]]);
          return enviar(res, 200, { ok: true, juegos: d.juegos.length, jugadores: d.jugadores.length });
        }
      }
      return enviar(res, 400, { error: "Acción no válida" });
    }

    const dias = [];
    for (let i = 0; i < 30; i++) dias.push(hoy(new Date(Date.now() - i * 86400000)));
    const cmds = [["GET", P + "visitas"], ["PFCOUNT", P + "personas"], ["LRANGE", P + "sugerencias", 0, 299], ["SMEMBERS", P + "encuestas"],
      ["GET", P + "publicaciones"], ["GET", P + "encuestas:conf"], ["GET", P + "estadisticas:fecha"], ["GET", P + "programacion"], ["GET", P + "galeria"], ["GET", P + "encuestas:ocultas"]];
    const base = cmds.length;
    dias.forEach(d => { cmds.push(["GET", P + "visitas:" + d]); cmds.push(["PFCOUNT", P + "personas:" + d]); });
    const r = await pipe(cmds);
    let conf = null; try { conf = JSON.parse(r[5]); } catch (e) {}
    const ids = Array.from(new Set((r[3] || []).concat((conf || []).map(e => e.id))));
    const votosR = ids.length ? await pipe(ids.map(id => ["HGETALL", P + "votos:" + id])) : [];
    const votos = {};
    ids.forEach((id, i) => { votos[id] = hash2obj(votosR[i]); });
    let pubs = []; try { pubs = JSON.parse(r[4]) || []; } catch (e) {}
    return enviar(res, 200, {
      visitas: parseInt(r[0], 10) || 0,
      personas: parseInt(r[1], 10) || 0,
      dias: dias.map((d, i) => ({ fecha: d, visitas: parseInt(r[base + i * 2], 10) || 0, personas: parseInt(r[base + 1 + i * 2], 10) || 0 })),
      sugerencias: (r[2] || []).map(x => { try { return JSON.parse(x); } catch (e) { return null; } }).filter(Boolean),
      votos,
      publicaciones: pubs,
      encuestas: conf,
      estadisticasFecha: r[6] || null,
      programacion: (() => { try { return JSON.parse(r[7]); } catch (e) { return null; } })(),
      galeria: (() => { try { return JSON.parse(r[8]) || []; } catch (e) { return []; } })(),
      ocultas: (() => { try { return JSON.parse(r[9]) || []; } catch (e) { return []; } })()
    });
  } catch (e) { return fallo(res, e); }
};
