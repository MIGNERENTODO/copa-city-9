// Ayudas compartidas: base de datos Upstash Redis (REST) y utilidades.
// Vercel no publica como ruta los archivos que empiezan con "_".
const crypto = require("crypto");

const URL_DB = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
const P = "cc9:"; // prefijo de todas las claves

async function pipe(cmds) {
  if (!URL_DB || !TOKEN) { const e = new Error("Base de datos no configurada"); e.code = "SIN_DB"; throw e; }
  const r = await fetch(URL_DB.replace(/\/$/, "") + "/pipeline", {
    method: "POST",
    headers: { Authorization: "Bearer " + TOKEN, "Content-Type": "application/json" },
    body: JSON.stringify(cmds)
  });
  if (!r.ok) throw new Error("Base de datos respondió " + r.status);
  const out = await r.json();
  return out.map(x => { if (x && x.error) throw new Error(x.error); return x ? x.result : null; });
}

function hoy(d) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Santiago", year: "numeric", month: "2-digit", day: "2-digit" }).format(d || new Date());
}

function huella(req) {
  const ip = String(req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "").split(",")[0].trim() || (req.socket && req.socket.remoteAddress) || "";
  const ua = String(req.headers["user-agent"] || "");
  return crypto.createHash("sha256").update((process.env.SALT || "copa-city-9") + "|" + ip + "|" + ua).digest("hex").slice(0, 32);
}

function cuerpo(req) {
  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  return b && typeof b === "object" ? b : {};
}

const idOk = s => typeof s === "string" && /^[A-Za-z0-9_-]{1,48}$/.test(s);

function hash2obj(arr) {
  const o = {};
  if (Array.isArray(arr)) for (let i = 0; i + 1 < arr.length; i += 2) o[arr[i]] = parseInt(arr[i + 1], 10) || 0;
  else if (arr && typeof arr === "object") for (const k in arr) o[k] = parseInt(arr[k], 10) || 0;
  return o;
}

function enviar(res, status, data) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.statusCode = status;
  res.end(JSON.stringify(data));
}

function fallo(res, e) {
  if (e && e.code === "SIN_DB") return enviar(res, 503, { error: "La base de datos todavía no está conectada." });
  console.error(e);
  return enviar(res, 500, { error: "Error interno" });
}

module.exports = { pipe, hoy, huella, cuerpo, idOk, hash2obj, enviar, fallo, P };
