// Contador de visitas. POST suma una visita y devuelve el total; GET solo lo lee.
// Si la visita llega por el enlace de un fanático (POST { ref: "CODIGO" }) y es una persona
// que nunca había entrado, el dueño del enlace gana puntos (máximo AMIGOS_POR_DIA al día).
const { pipe, hoy, huella, cuerpo, enviar, fallo, P } = require("./_db");
const X = require("./_fan");

async function premiarAmigo(ref, h, nuevaPersona, d) {
  if (!nuevaPersona || !X.codOk(ref)) return;
  const [raw] = await pipe([["HGETALL", X.K(ref)]]);
  const f = X.ficha(raw);
  if (!f || f.anul === "1") return;
  f.cod = ref;
  const kd = X.K("rd:" + ref + ":" + d);
  const [c] = await pipe([["INCR", kd], ["EXPIRE", kd, 60 * 60 * 48]]);
  if ((parseInt(c, 10) || 0) > X.F.AMIGOS_POR_DIA) return;
  await X.sumar(f, X.F.PUNTOS.amigo, "Un amigo nuevo entró con tu enlace");
}

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const [t] = await pipe([["GET", P + "visitas"]]);
      return enviar(res, 200, { total: parseInt(t, 10) || 0 });
    }
    if (req.method !== "POST") return enviar(res, 405, { error: "Método no permitido" });
    const b = cuerpo(req);
    const d = hoy(), h = huella(req), dur = 60 * 60 * 24 * 400;
    const r = await pipe([
      ["INCR", P + "visitas"],
      ["INCR", P + "visitas:" + d],
      ["EXPIRE", P + "visitas:" + d, dur],
      ["PFADD", P + "personas", h],
      ["PFADD", P + "personas:" + d, h],
      ["EXPIRE", P + "personas:" + d, dur],
      ["SET", X.K("v:" + h), 1, "NX", "EX", dur]
    ]);
    // Persona nueva: nunca había entrado (ni antes de que existieran los carnets, por eso también se mira el contador de personas)
    const nueva = r[6] === "OK" && (r[3] === 1 || r[3] === "1");
    try { await premiarAmigo(String(b.ref || "").toUpperCase(), h, nueva, d); } catch (e) { console.error(e); }
    return enviar(res, 200, { total: parseInt(r[0], 10) || 0 });
  } catch (e) { return fallo(res, e); }
};
