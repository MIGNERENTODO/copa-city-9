// Contenido que publica el administrador desde el panel: estadísticas, publicaciones y encuestas.
// La página lo lee aquí; si no hay nada guardado, usa los archivos de la carpeta datos/.
const { pipe, enviar, fallo, P } = require("./_db");

function parse(x, def) { if (!x) return def; try { return JSON.parse(x); } catch (e) { return def; } }

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") return enviar(res, 405, { error: "Método no permitido" });
    const [stats, pubs, enc, prog, gal, ocu] = await pipe([
      ["GET", P + "estadisticas"],
      ["GET", P + "publicaciones"],
      ["GET", P + "encuestas:conf"],
      ["GET", P + "programacion"],
      ["GET", P + "galeria"],
      ["GET", P + "encuestas:ocultas"]
    ]);
    res.setHeader("CDN-Cache-Control", "public, s-maxage=10");
    return enviar(res, 200, {
      estadisticas: parse(stats, null),
      publicaciones: parse(pubs, []).filter(p => !p.borrador),
      encuestas: parse(enc, null),
      programacion: parse(prog, null),
      galeria: parse(gal, []),
      ocultas: parse(ocu, [])
    });
  } catch (e) { return fallo(res, e); }
};
