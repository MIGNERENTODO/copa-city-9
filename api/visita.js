// Contador de visitas. POST suma una visita y devuelve el total; GET solo lo lee.
const { pipe, hoy, huella, enviar, fallo, P } = require("./_db");

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const [t] = await pipe([["GET", P + "visitas"]]);
      return enviar(res, 200, { total: parseInt(t, 10) || 0 });
    }
    if (req.method !== "POST") return enviar(res, 405, { error: "Método no permitido" });
    const d = hoy(), h = huella(req), dur = 60 * 60 * 24 * 400;
    const r = await pipe([
      ["INCR", P + "visitas"],
      ["INCR", P + "visitas:" + d],
      ["EXPIRE", P + "visitas:" + d, dur],
      ["PFADD", P + "personas", h],
      ["PFADD", P + "personas:" + d, h],
      ["EXPIRE", P + "personas:" + d, dur]
    ]);
    return enviar(res, 200, { total: parseInt(r[0], 10) || 0 });
  } catch (e) { return fallo(res, e); }
};
