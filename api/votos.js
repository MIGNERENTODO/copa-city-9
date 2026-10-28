// Votaciones del público (MVP y encuestas). Un voto por persona en cada encuesta.
// GET  /api/votos?e=id1,id2   -> { conteo: { id1: { opcion: n } }, dias: { id1: { "2026-10-28": n } } }
// POST /api/votos { encuesta, opcion }
const { pipe, hoy, huella, cuerpo, idOk, hash2obj, enviar, fallo, P } = require("./_db");

async function leer(ids) {
  const cmds = [];
  ids.forEach(id => { cmds.push(["HGETALL", P + "votos:" + id]); cmds.push(["HGETALL", P + "votosdia:" + id]); });
  const r = await pipe(cmds);
  const conteo = {}, dias = {};
  ids.forEach((id, i) => { conteo[id] = hash2obj(r[i * 2]); dias[id] = hash2obj(r[i * 2 + 1]); });
  return { conteo, dias };
}

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const q = new URL(req.url, "http://x").searchParams.get("e") || "";
      const ids = q.split(",").filter(idOk).slice(0, 20);
      if (!ids.length) return enviar(res, 200, { conteo: {}, dias: {} });
      res.setHeader("CDN-Cache-Control", "public, s-maxage=5");
      return enviar(res, 200, await leer(ids));
    }
    if (req.method !== "POST") return enviar(res, 405, { error: "Método no permitido" });
    const b = cuerpo(req);
    if (!idOk(b.encuesta) || !idOk(b.opcion)) return enviar(res, 400, { error: "Voto no válido" });

    // Si el administrador publicó encuestas desde el panel, solo se aceptan votos de encuestas abiertas.
    const [conf] = await pipe([["GET", P + "encuestas:conf"]]);
    if (conf) {
      let lista = []; try { lista = JSON.parse(conf) || []; } catch (e) {}
      const e = lista.find(x => x.id === b.encuesta);
      if (!e) return enviar(res, 404, { error: "Encuesta no encontrada" });
      if (e.estado === "cerrada") return enviar(res, 403, { error: "La votación está cerrada" });
    }

    const llave = P + "votos:" + b.encuesta;
    const [nuevo, opciones] = await pipe([
      ["SET", P + "voto:" + b.encuesta + ":" + huella(req), b.opcion, "NX", "EX", 60 * 60 * 24 * 365],
      ["HLEN", llave]
    ]);
    if (nuevo !== "OK") return enviar(res, 409, Object.assign({ yaVoto: true }, await leer([b.encuesta])));
    if ((parseInt(opciones, 10) || 0) > 80) return enviar(res, 400, { error: "Encuesta llena" });
    await pipe([
      ["HINCRBY", llave, b.opcion, 1],
      ["HINCRBY", P + "votosdia:" + b.encuesta, hoy(), 1],
      ["SADD", P + "encuestas", b.encuesta]
    ]);
    return enviar(res, 200, Object.assign({ ok: true }, await leer([b.encuesta])));
  } catch (e) { return fallo(res, e); }
};
