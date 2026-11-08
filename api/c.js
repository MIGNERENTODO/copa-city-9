// Enlaces para compartir con miniatura (WhatsApp, Facebook, Instagram, X).
// La página usa enlaces con # que las redes no leen, así que estos enlaces entregan
// título, descripción e imagen de cada publicación y después llevan a la persona a la página.
//   /n/<id>      una publicación (noticia, artículo, perfil, entrevista)
//   /e/<equipo>  la página de un equipo
//   /f/<codigo>  invitación de un fanático (su enlace personal)
// Cualquiera acepta ?h=<codigo> para que el fanático que comparte gane puntos.
const { pipe } = require("./_db");
const X = require("./_fan");
const MINIS = require("../datos/compartir.js");

const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const idOk = s => typeof s === "string" && /^[A-Za-z0-9_-]{1,80}$/.test(s);

function origen(req) {
  const host = String(req.headers["x-forwarded-host"] || req.headers.host || "copa-city-9.vercel.app").split(",")[0].trim();
  const proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0].trim();
  return proto + "://" + host;
}
/* Imagen liviana para la miniatura si existe en assets/compartir/, si no la original */
function imagen(base, ruta) {
  if (!ruta) return { url: base + "/assets/compartir/copa-city-9.jpg", w: 1200, h: 630 };
  if (/^assets\//.test(ruta)) {
    const nombre = ruta.split("/").pop();
    if (MINIS.indexOf(nombre) >= 0) return { url: base + "/assets/compartir/" + nombre, w: 1200, h: 630 };
    return { url: base + "/" + ruta };
  }
  if (/^[a-f0-9]{12,32}$/.test(ruta)) return { url: base + "/api/foto?id=" + ruta };
  return { url: base + "/assets/compartir/copa-city-9.jpg", w: 1200, h: 630 };
}

async function publicacion(id) {
  let lista = [];
  try { const [x] = await pipe([["GET", "cc9:publicaciones"]]); lista = JSON.parse(x) || []; } catch (e) { lista = []; }
  const p = lista.find(x => x && x.id === id && !x.borrador) || (X.SITIO.publicaciones || []).find(x => x && x.id === id && !x.borrador);
  return p || null;
}

module.exports = async (req, res) => {
  const q = new URL(req.url, "http://x").searchParams;
  const t = q.get("t"), id = q.get("id") || "", ref = String(q.get("h") || "").toUpperCase();
  const base = origen(req), liga = (X.SITIO.liga || {});
  const refOk = X.codOk(ref) ? ref : "";
  let titulo = "Copa City 9 · " + (liga.lema || "La Copa de las 9 ciudades");
  let desc = "Resultados, tabla de posiciones, estadísticas, votaciones y noticias del Torneo Interregional de Softbol. " + (liga.sede || "Estadio La Ligua Park") + ".";
  let img = imagen(base, ""), destino = "/", tipo = "website";

  try {
    if (t === "n" && idOk(id)) {
      const p = await publicacion(id);
      if (p) { titulo = p.titulo + " · Copa City 9"; desc = p.bajada || desc; img = imagen(base, p.portada); destino = "/#articulo-" + id; tipo = "article"; }
    } else if (t === "e" && idOk(id)) {
      const e = (X.SITIO.equipos || []).find(x => x.id === id);
      if (e) {
        titulo = e.nombre + " · Copa City 9"; desc = "Roster, resultados, juegos y líderes de " + e.nombre + " en la Copa City 9.";
        if (MINIS.indexOf("equipo-" + id + ".jpg") >= 0) img = { url: base + "/assets/compartir/equipo-" + id + ".jpg", w: 1200, h: 630 };
        destino = "/#equipo-" + id;
      }
    } else if (t === "f" && X.codOk(String(id).toUpperCase())) {
      const cod = String(id).toUpperCase();
      const [r] = await pipe([["HMGET", X.K(cod), "nombre", "equipo", "anul"]]);
      if (r && r[0] && r[2] !== "1") {
        const eq = (X.SITIO.equipos || []).find(x => x.id === r[1]);
        titulo = r[0] + " te invita a la Copa City 9";
        desc = "Saca gratis tu carnet de Fanático de la Copa City 9" + (eq ? ", apoya a " + eq.nombre : "") + " y compite por el premio del mes.";
      } else { titulo = "Fanáticos de la Copa City 9"; desc = "Saca gratis tu carnet de Fanático y compite por el premio del mes."; }
      img = { url: base + "/assets/compartir/fanaticos.jpg", w: 1200, h: 630 };
      destino = "/?h=" + cod + "#fanaticos";
    }
  } catch (e) { console.error(e); }

  if (refOk && destino.indexOf("?h=") < 0) destino = "/?h=" + refOk + destino.slice(1);
  const url = base + destino;
  const propia = base + ({ n: "/n/", e: "/e/", f: "/f/" }[t] ? { n: "/n/", e: "/e/", f: "/f/" }[t] + encodeURIComponent(id) : "/") + (refOk && t !== "f" ? "?h=" + refOk : "");

  const html = '<!doctype html><html lang="es"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>' + esc(titulo) + '</title>' +
    '<meta name="description" content="' + esc(desc) + '">' +
    '<meta property="og:site_name" content="Copa City 9">' +
    '<meta property="og:locale" content="es_CL">' +
    '<meta property="og:type" content="' + tipo + '">' +
    '<meta property="og:title" content="' + esc(titulo) + '">' +
    '<meta property="og:description" content="' + esc(desc) + '">' +
    '<meta property="og:url" content="' + esc(propia) + '">' +
    '<meta property="og:image" content="' + esc(img.url) + '">' +
    '<meta property="og:image:secure_url" content="' + esc(img.url) + '">' +
    '<meta property="og:image:type" content="image/jpeg">' +
    (img.w ? '<meta property="og:image:width" content="' + img.w + '"><meta property="og:image:height" content="' + img.h + '">' : '') +
    '<meta property="og:image:alt" content="' + esc(titulo) + '">' +
    '<meta name="twitter:card" content="summary_large_image">' +
    '<meta name="twitter:title" content="' + esc(titulo) + '">' +
    '<meta name="twitter:description" content="' + esc(desc) + '">' +
    '<meta name="twitter:image" content="' + esc(img.url) + '">' +
    '<meta name="theme-color" content="#041E42">' +
    '<style>body{margin:0;font:16px system-ui,sans-serif;background:#041E42;color:#fff;display:grid;place-items:center;min-height:100vh;text-align:center;padding:16px}a{color:#F2B705}</style>' +
    '</head><body><div><p>Abriendo la Copa City 9…</p><p><a href="' + esc(url) + '">Toca aquí si no se abre</a></p></div>' +
    '<script>location.replace(' + JSON.stringify(url).replace(/</g, "\\u003c") + ');</script></body></html>';

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=300");
  res.statusCode = 200;
  res.end(html);
};
