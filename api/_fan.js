// Ayudas compartidas de los Fanáticos de la Copa City 9 (carnets, puntos y ranking).
// Vercel no publica como ruta los archivos que empiezan con "_".
//
// Claves en la base de datos (todas con el prefijo cc9:):
//   hf:n                     contador de números de carnet
//   hf:<codigo>              ficha del fanático (hash)
//   hf:wa:<numero>           codigo dueño de ese WhatsApp (un carnet por número)
//   hf:todos                 todos los carnets, ordenados por número (zset)
//   hf:r:<periodo>           puntos del mes por fanático (zset)
//   hf:re:<periodo>          puntos del mes por hinchada/equipo (zset)
//   hf:r:temp                puntos de la temporada (zset)
//   hf:periodos              períodos con actividad (set)
//   hf:log:<codigo>          últimos movimientos de puntos (lista)
const crypto = require("crypto");
const { pipe, hoy, P } = require("./_db");
const F = require("../datos/fanaticos.js");
global.window = global.window || {};
require("../datos/sitio.js");
const SITIO = global.window.SITIO || {};
const EQUIPOS = (SITIO.equipos || []).map(t => t.id);

const K = s => P + "hf:" + s;
const codOk = s => typeof s === "string" && /^[A-Z0-9]{4,10}$/.test(s);
const tkHash = tk => crypto.createHash("sha256").update("cc9-fan|" + String(tk || "")).digest("hex");
const ALFA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sin 0/O ni 1/I para que no se confundan

function nuevoCodigo(nombre) {
  const base = String(nombre || "").normalize("NFD").replace(/[^A-Za-z]/g, "").toUpperCase().replace(/[OI]/g, "").slice(0, 4) || "FAN";
  let s = base;
  const r = crypto.randomBytes(4);
  for (let i = 0; i < 3; i++) s += ALFA[r[i] % ALFA.length];
  return s;
}
function nuevoToken() { return crypto.randomBytes(24).toString("hex"); }

function limpiarTexto(s, max) { return String(s == null ? "" : s).replace(/[\u0000-\u001F<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max); }
/* WhatsApp: solo dígitos. Un celular chileno de 9 dígitos que empieza con 9 se completa con 56. */
function limpiarWA(s) {
  let d = String(s || "").replace(/\D/g, "");
  if (d.length === 9 && d[0] === "9") d = "56" + d;
  if (d.length === 8) d = "569" + d;
  return d.length >= 10 && d.length <= 15 ? d : "";
}
function limpiarIG(s) {
  let t = String(s || "").trim().replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/[/?#].*$/, "").replace(/^@+/, "");
  return /^[A-Za-z0-9._]{1,30}$/.test(t) ? t.toLowerCase() : "";
}

function ficha(h) {
  if (!h) return null;
  const o = Array.isArray(h) ? {} : h;
  if (Array.isArray(h)) for (let i = 0; i + 1 < h.length; i += 2) o[h[i]] = h[i + 1];
  return Object.keys(o).length ? o : null;
}

/* Lee la ficha y comprueba el token del teléfono. Devuelve la ficha o null. */
async function verificar(cod, tk) {
  if (!codOk(cod) || typeof tk !== "string" || tk.length < 20) return null;
  const [h] = await pipe([["HGETALL", K(cod)]]);
  const f = ficha(h);
  if (!f || f.tk !== tkHash(tk) || f.anul === "1") return null;
  f.cod = cod;
  return f;
}

/* Suma puntos al fanático, a su hinchada y a la temporada */
async function sumar(f, pts, motivo) {
  if (!f || f.anul === "1" || !pts) return 0;
  const per = F.periodo().id;
  const cmds = [
    ["ZINCRBY", K("r:" + per), pts, f.cod],
    ["ZINCRBY", K("r:temp"), pts, f.cod],
    ["HINCRBY", K(f.cod), "pts", pts],
    ["SADD", K("periodos"), per],
    ["LPUSH", K("log:" + f.cod), JSON.stringify({ f: new Date().toISOString(), m: motivo, p: pts })],
    ["LTRIM", K("log:" + f.cod), 0, 39]
  ];
  if (f.equipo) cmds.push(["ZINCRBY", K("re:" + per), pts, f.equipo]);
  await pipe(cmds);
  return pts;
}

/* Datos públicos del fanático para su teléfono */
async function perfil(f) {
  const per = F.periodo().id;
  const [mes, pos, temp, log] = await pipe([
    ["ZSCORE", K("r:" + per), f.cod],
    ["ZREVRANK", K("r:" + per), f.cod],
    ["ZSCORE", K("r:temp"), f.cod],
    ["LRANGE", K("log:" + f.cod), 0, 9]
  ]);
  return {
    cod: f.cod, n: parseInt(f.n, 10) || 0, nombre: f.nombre, equipo: f.equipo, ig: f.ig, fecha: f.fecha,
    mes: parseInt(mes, 10) || 0, puesto: pos == null ? null : parseInt(pos, 10) + 1,
    temporada: parseInt(temp, 10) || 0, racha: parseInt(f.racha, 10) || 0,
    movimientos: (log || []).map(x => { try { return JSON.parse(x); } catch (e) { return null; } }).filter(Boolean)
  };
}

/* Programación vigente: la del panel o la de datos/sitio.js */
async function programacion() {
  const [x] = await pipe([["GET", P + "programacion"]]);
  try { const j = JSON.parse(x); if (Array.isArray(j)) return j; } catch (e) {}
  return SITIO.programacion || [];
}

module.exports = { K, F, SITIO, EQUIPOS, codOk, tkHash, nuevoCodigo, nuevoToken, limpiarTexto, limpiarWA, limpiarIG, ficha, verificar, sumar, perfil, programacion, hoy };
