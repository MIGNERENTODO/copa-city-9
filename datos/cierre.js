/* Cierre automático de votaciones: viernes a las 22:00, hora de Chile (America/Santiago).
   Lo usan la página, el panel y el servidor. */
(function (raiz) {
  var TZ = "America/Santiago", DIAS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function partes(fecha) {
    var o = {};
    new Intl.DateTimeFormat("en-US", { timeZone: TZ, hourCycle: "h23", weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })
      .formatToParts(fecha).forEach(function (p) { o[p.type] = p.value; });
    return { y: +o.year, m: +o.month, d: +o.day, h: +o.hour % 24, min: +o.minute, wd: DIAS[o.weekday] };
  }
  /* Convierte una hora local de Chile (año, mes, día, hora) a fecha real */
  function deChile(y, m, d, h, min) {
    var guess = Date.UTC(y, m - 1, d, h, min);
    for (var i = 0; i < 2; i++) {
      var p = partes(new Date(guess));
      var diff = Date.UTC(p.y, p.m - 1, p.d, p.h, p.min) - Date.UTC(y, m - 1, d, h, min);
      guess -= diff;
    }
    return new Date(guess);
  }
  /* Próximo viernes a las 22:00 (hora de Chile) desde la fecha dada */
  function proximoCierre(desde) {
    var p = partes(desde || new Date());
    var dias = (5 - p.wd + 7) % 7;
    if (dias === 0 && (p.h > 22 || (p.h === 22 && p.min >= 0))) dias = 7;
    var base = new Date(Date.UTC(p.y, p.m - 1, p.d + dias));
    return deChile(base.getUTCFullYear(), base.getUTCMonth() + 1, base.getUTCDate(), 22, 0);
  }
  /* Fecha de cierre de una encuesta: la guardada, o el viernes 22:00 de la semana en que se creó */
  function cierreDe(e) {
    if (e && e.cierra && !isNaN(Date.parse(e.cierra))) return new Date(e.cierra);
    if (e && /^\d{4}-\d{2}-\d{2}$/.test(e.creada || "")) { var c = e.creada.split("-"); return proximoCierre(deChile(+c[0], +c[1], +c[2], 0, 0)); }
    return null;
  }
  function estaAbierta(e, ahora) {
    if (!e || e.estado === "cerrada") return false;
    var c = cierreDe(e);
    return !c || (ahora || new Date()) < c;
  }
  function textoCierre(fecha) {
    if (!fecha) return "";
    return new Intl.DateTimeFormat("es-CL", { timeZone: TZ, weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(fecha);
  }
  /* Une las votaciones del panel con las publicadas en datos/sitio.js (las que publica Claude).
     Las del panel mandan; las del archivo aparecen si no están en el panel ni fueron quitadas. */
  function fusionar(panel, archivo, ocultas) {
    var out = [], ids = {}, oc = {};
    (ocultas || []).forEach(function (x) { oc[x] = 1; });
    (Array.isArray(panel) ? panel : []).forEach(function (e) { if (e && e.id && !ids[e.id]) { ids[e.id] = 1; out.push(e); } });
    (archivo || []).forEach(function (e) { if (e && e.id && !ids[e.id] && !oc[e.id]) { ids[e.id] = 1; var c = JSON.parse(JSON.stringify(e)); c._archivo = true; out.push(c); } });
    out.sort(function (a, b) { var ca = cierreDe(a), cb = cierreDe(b); return (cb ? cb.getTime() : 0) - (ca ? ca.getTime() : 0); });
    return out;
  }
  var api = { proximoCierre: proximoCierre, cierreDe: cierreDe, estaAbierta: estaAbierta, textoCierre: textoCierre, fusionar: fusionar };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else raiz.CIERRE = api;
})(typeof window !== "undefined" ? window : this);
