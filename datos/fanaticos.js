/* Fanáticos de la Copa City 9: reglas de puntos, período del ranking y pronósticos.
   Lo usan la página, el panel y el servidor, así todos calculan lo mismo.

   El ranking es mensual y cierra el viernes a las 22:00 (hora de Chile) antes del
   primer domingo de cada mes. El premio (un six pack) se entrega ese primer domingo,
   en la primera jornada del mes. */
(function (raiz) {
  var TZ = "America/Santiago";
  var MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  var PUNTOS = {
    visita: 2,     // entrar a la página, una vez al día
    racha: 10,     // cada 7 días seguidos entrando
    voto: 5,       // votar en el MVP del público o en una votación
    pronostico: 3, // pronosticar quién gana un juego
    acierto: 5,    // acertar el pronóstico
    amigo: 10,     // un amigo nuevo entra por tu enlace
    inscrito: 20   // ese amigo saca su carnet
  };
  var AMIGOS_POR_DIA = 5;
  var PREMIO = "Un six pack";

  function partes(fecha) {
    var o = {};
    new Intl.DateTimeFormat("en-US", { timeZone: TZ, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })
      .formatToParts(fecha).forEach(function (p) { o[p.type] = p.value; });
    return { y: +o.year, m: +o.month, d: +o.day, h: +o.hour % 24, min: +o.minute };
  }
  /* Hora local de Chile -> fecha real */
  function deChile(y, m, d, h, min) {
    var guess = Date.UTC(y, m - 1, d, h, min);
    for (var i = 0; i < 2; i++) {
      var p = partes(new Date(guess));
      guess -= Date.UTC(p.y, p.m - 1, p.d, p.h, p.min) - Date.UTC(y, m - 1, d, h, min);
    }
    return new Date(guess);
  }
  function iso(y, m, d) { var x = new Date(Date.UTC(y, m - 1, d)); return x.getUTCFullYear() + "-" + String(x.getUTCMonth() + 1).padStart(2, "0") + "-" + String(x.getUTCDate()).padStart(2, "0"); }
  /* Primer domingo del mes y el cierre (viernes anterior, 22:00 de Chile) */
  function cierreDelMes(y, m) {
    var dow = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
    var domingo = 1 + (7 - dow) % 7;
    var vie = new Date(Date.UTC(y, m - 1, domingo - 2));
    return {
      cierra: deChile(vie.getUTCFullYear(), vie.getUTCMonth() + 1, vie.getUTCDate(), 22, 0),
      premio: iso(y, m, domingo)
    };
  }
  function sumarMes(y, m, k) { var t = y * 12 + (m - 1) + k; return { y: Math.floor(t / 12), m: t % 12 + 1 }; }
  /* Período del ranking que contiene la fecha dada.
     id "2026-11" = ranking de noviembre: va desde el cierre de comienzos de noviembre
     hasta el viernes antes del primer domingo de diciembre. */
  function periodo(ahora) {
    ahora = ahora || new Date();
    /* El cierre de un mes puede caer en los últimos días del mes anterior (p. ej. viernes 30 de octubre
       para el primer domingo de noviembre), así que se busca el primer cierre que todavía no pasa. */
    var p = partes(ahora), k = 0, fin, ini, mes, sig;
    for (k = 0; k < 3; k++) { sig = sumarMes(p.y, p.m, k); fin = cierreDelMes(sig.y, sig.m); if (ahora < fin.cierra) break; }
    mes = sumarMes(sig.y, sig.m, -1); ini = cierreDelMes(mes.y, mes.m);
    return {
      id: mes.y + "-" + String(mes.m).padStart(2, "0"),
      nombre: MESES[mes.m - 1],
      anio: mes.y,
      desde: ini.cierra.toISOString(),
      cierra: fin.cierra.toISOString(),
      premio: fin.premio
    };
  }
  function periodoAnterior(ahora) {
    var p = periodo(ahora || new Date());
    return periodo(new Date(new Date(p.desde).getTime() - 60000));
  }
  function nombrePeriodo(id) {
    var m = /^(\d{4})-(\d{2})$/.exec(id || ""); return m ? MESES[+m[2] - 1] + " " + m[1] : id;
  }

  /* Pronósticos: un juego se identifica por fecha, visita y local (ids de equipos) */
  function juegoKey(fecha, visita, local) { return String(fecha).replace(/-/g, "") + "_" + visita + "_" + local; }
  function leerKey(k) {
    var m = /^(\d{4})(\d{2})(\d{2})_([a-z0-9-]+)_([a-z0-9-]+)$/.exec(k || "");
    return m ? { fecha: m[1] + "-" + m[2] + "-" + m[3], visita: m[4], local: m[5] } : null;
  }
  /* Hora del primer lanzamiento; sin hora, el juego se cierra a las 09:00 de ese día */
  function inicioJuego(fecha, hora) {
    var f = String(fecha || "").split("-").map(Number), h = /^(\d{1,2}):(\d{2})$/.exec(hora || "");
    if (f.length < 3 || !f[0]) return null;
    return deChile(f[0], f[1], f[2], h ? +h[1] : 9, h ? +h[2] : 0);
  }
  /* Juegos programados (formato de la programación semanal: [visita, local, hora]) */
  function juegosProgramados(prog) {
    var out = [];
    (prog || []).forEach(function (j) {
      (j.partidos || []).forEach(function (pp) {
        if (!j.fecha || !pp || !pp[0] || !pp[1]) return;
        out.push({ key: juegoKey(j.fecha, pp[0], pp[1]), jornada: j.n, fecha: j.fecha, hora: pp[2] || "", visita: pp[0], local: pp[1], inicio: inicioJuego(j.fecha, pp[2]) });
      });
    });
    return out;
  }
  function textoFecha(fecha, conHora) {
    if (!fecha) return "";
    var o = { timeZone: TZ, weekday: "long", day: "numeric", month: "long" };
    if (conHora) { o.hour = "2-digit"; o.minute = "2-digit"; o.hourCycle = "h23"; }
    return new Intl.DateTimeFormat("es-CL", o).format(fecha);
  }
  function hoyChile(fecha) { var p = partes(fecha || new Date()); return iso(p.y, p.m, p.d); }

  var api = {
    PUNTOS: PUNTOS, AMIGOS_POR_DIA: AMIGOS_POR_DIA, PREMIO: PREMIO,
    periodo: periodo, periodoAnterior: periodoAnterior, nombrePeriodo: nombrePeriodo,
    juegoKey: juegoKey, leerKey: leerKey, inicioJuego: inicioJuego, juegosProgramados: juegosProgramados,
    textoFecha: textoFecha, hoyChile: hoyChile, deChile: deChile
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else raiz.FANATICOS = api;
})(typeof window !== "undefined" ? window : this);
