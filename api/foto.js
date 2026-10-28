// Fotos subidas desde el panel (artículos, resúmenes, jugador de la semana).
// GET /api/foto?id=xxxx  -> imagen JPEG
const { pipe, fallo } = require("./_db");
const P = "cc9:";

module.exports = async (req, res) => {
  try {
    const id = new URL(req.url, "http://x").searchParams.get("id") || "";
    if (!/^[a-f0-9]{12,32}$/.test(id)) { res.statusCode = 404; return res.end("No encontrada"); }
    const [b64] = await pipe([["GET", P + "foto:" + id]]);
    if (!b64) { res.statusCode = 404; return res.end("No encontrada"); }
    const buf = Buffer.from(b64, "base64");
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.setHeader("Content-Length", buf.length);
    res.statusCode = 200;
    return res.end(buf);
  } catch (e) { return fallo(res, e); }
};
