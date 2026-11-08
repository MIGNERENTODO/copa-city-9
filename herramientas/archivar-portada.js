// Guarda la portada rotativa de una jornada como "Resumen de la Jornada N" en Noticias.
// Regla de la Copa City 9: antes de cambiar la portada a una jornada nueva, se archiva la anterior.
//
// Uso (desde la carpeta del repositorio):
//   node herramientas/archivar-portada.js                    archiva la portada actual de datos/sitio.js
//   node herramientas/archivar-portada.js viejo/sitio.js     archiva la portada de otra versión del archivo
// El resumen se agrega al inicio de "publicaciones" en datos/sitio.js. Si ya existe, no hace nada.
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const DESTINO = path.join(RAIZ, "datos/sitio.js");
const ORIGEN = path.resolve(process.argv[2] || DESTINO);

function cargar(f) { const w = {}; new Function("window", fs.readFileSync(f, "utf8"))(w); return w.SITIO; }
const viejo = cargar(ORIGEN), actual = cargar(DESTINO);
const P = viejo.portada || {};
const m = /Jornada\s+(\d+)/i.exec(P.jornada || "");
if (!m) { console.error("La portada no indica la jornada (campo portada.jornada)."); process.exit(1); }
const N = m[1], id = "resumen-jornada-" + N;
if ((actual.publicaciones || []).some(p => p.id === id)) { console.log("Ya existe " + id + ". No se hizo nada."); process.exit(0); }

const eq = {}; (actual.equipos || []).forEach(t => { eq[t.id] = t.nombre; });
const deJornada = (P.slides || []).filter(s => new RegExp("Jornada\\s+" + N + "\\b").test(s.tag || ""));
if (!deJornada.length) { console.error("No hay diapositivas de la Jornada " + N + "."); process.exit(1); }
const titulares = deJornada.filter(s => !s.visita), juegos = deJornada.filter(s => s.visita);
const pubs = {}; (actual.publicaciones || []).forEach(p => { pubs[p.id] = p.titulo; });
const MES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const DIA = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
const f = (P.fecha || "").split("-").map(Number), fecha = f[0] ? new Date(f[0], f[1] - 1, f[2]) : null;
const cuando = fecha ? "el " + DIA[fecha.getDay()] + " " + fecha.getDate() + " de " + MES[fecha.getMonth()] : "";

const principal = titulares[0] || juegos[0];
const bloques = [];
bloques.push({ t: "p", x: "Así se vivió la Jornada " + N + " de la Copa City 9" + (cuando ? ", jugada " + cuando : "") + " en el Estadio La Ligua Park. Este resumen reúne los titulares y resultados que acompañaron la portada de la página durante esa semana." });
titulares.slice(principal === titulares[0] ? 1 : 0).forEach(s => {
  bloques.push({ t: "h", x: s.titulo });
  if (s.img) bloques.push({ t: "img", id: s.img, pie: s.alt || s.titulo });
  if (s.bajada) bloques.push({ t: "p", x: s.bajada });
  const a = /^#articulo-(.+)$/.exec(s.link || ""); if (a && pubs[a[1]]) bloques.push({ t: "p", x: "Lee el artículo completo en Noticias: «" + pubs[a[1]] + "»." });
});
if (juegos.length) bloques.push({ t: "h", x: "Juego por juego" });
juegos.forEach(s => {
  const n = (/Juego\s+(\d+)/i.exec(s.tag || "") || [])[1];
  bloques.push({ t: "cita", x: (n ? "Juego " + n + " · " : "") + (eq[s.visita] || s.visita) + " " + s.cv + ", " + (eq[s.local] || s.local) + " " + s.cl + " · " + s.titulo });
  if (s.img && s.img !== principal.img) bloques.push({ t: "img", id: s.img, pie: s.alt || s.titulo });
  if (s.bajada) bloques.push({ t: "p", x: s.bajada });
});
const pub = {
  id, tipo: "juego",
  titulo: "Resumen de la Jornada " + N + ": " + principal.titulo,
  bajada: principal.bajada || "Los resultados y titulares de la Jornada " + N + " de la Copa City 9.",
  autor: "Migner Acosta", fecha: P.fecha || "", portada: principal.img || "", bloques
};
let t = fs.readFileSync(DESTINO, "utf8");
const ins = "  publicaciones: [\n";
if (t.indexOf(ins) < 0) { console.error("No se encontró la lista de publicaciones."); process.exit(1); }
t = t.replace(ins, ins + "    " + JSON.stringify(pub, null, 2).replace(/\n/g, "\n    ") + ",\n");
fs.writeFileSync(DESTINO, t);
console.log("Agregado: " + pub.titulo + " (" + juegos.length + " juegos, " + titulares.length + " titulares)");
