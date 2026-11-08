/* Carnet de Fanático de la Copa City 9 (imagen JPG 1200 x 750).
   Lo usan la página (para que el fanático lo descargue) y el panel (respaldo de cada carnet).
   CARNET.dibujar(datos) -> Promise<canvas>
   datos: { nombre, n, ig, fecha (ISO), cod, url, equipo: { nombre, color, logo } } */
(function (raiz) {
  var W = 1200, H = 750, cache = {};
  var MES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var D = "'Barlow Condensed','Arial Narrow',Arial,sans-serif";

  function img(src) {
    if (!src) return Promise.resolve(null);
    if (cache[src]) return cache[src];
    cache[src] = new Promise(function (ok) { var i = new Image(); i.onload = function () { ok(i); }; i.onerror = function () { ok(null); }; i.src = src; });
    return cache[src];
  }
  function fuentes() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all(["italic 800 80px 'Barlow Condensed'", "700 40px 'Barlow Condensed'", "600 30px 'Barlow Condensed'"].map(function (f) { return document.fonts.load(f).catch(function () {}); }));
  }
  function rgb(hex) { var h = String(hex || "#0B4FD8").replace("#", ""); if (h.length === 3) h = h.replace(/./g, "$&$&"); var n = parseInt(h, 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mezcla(c, k) { return "rgb(" + c.map(function (v) { return Math.round(v * k); }).join(",") + ")"; }
  function rr(x, c, y, w, h, r) { x.beginPath(); x.moveTo(c + r, y); x.arcTo(c + w, y, c + w, y + h, r); x.arcTo(c + w, y + h, c, y + h, r); x.arcTo(c, y + h, c, y, r); x.arcTo(c, y, c + w, y, r); x.closePath(); }
  function ajustar(x, txt, max, tam, peso) { var t = tam; do { x.font = peso + " " + t + "px " + D; t -= 2; } while (x.measureText(txt).width > max && t > 30); return t + 2; }
  function fechaCorta(iso) { var d = new Date(iso); if (isNaN(d)) return ""; return d.getDate() + " " + MES[d.getMonth()] + " " + d.getFullYear(); }
  function qr(x, texto, cx, cy, size) {
    if (typeof raiz.qrcode !== "function") return;
    var q = raiz.qrcode(0, "M"); q.addData(texto); q.make();
    var n = q.getModuleCount(), m = size / n;
    x.fillStyle = "#041E42";
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (q.isDark(r, c)) x.fillRect(Math.floor(cx + c * m), Math.floor(cy + r * m), Math.ceil(m), Math.ceil(m));
  }

  function dibujar(d) {
    var cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    var x = cv.getContext("2d"), eq = d.equipo || {}, col = rgb(eq.color);
    return Promise.all([fuentes(), img("assets/logos/copacity9.png"), img(eq.logo)]).then(function (r) {
      var copa = r[1], logo = r[2];
      // Fondo: azul de la Copa con el color del equipo entrando en diagonal
      x.fillStyle = "#041E42"; x.fillRect(0, 0, W, H);
      var g = x.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, mezcla(col, .55)); g.addColorStop(.55, mezcla(col, 1)); g.addColorStop(1, mezcla(col, .35));
      x.save(); x.beginPath(); x.moveTo(470, 0); x.lineTo(W, 0); x.lineTo(W, H); x.lineTo(300, H); x.closePath(); x.fillStyle = g; x.fill(); x.restore();
      // Rayas finas
      x.save(); x.globalAlpha = .07; x.strokeStyle = "#fff"; x.lineWidth = 12;
      for (var s = -H; s < W; s += 44) { x.beginPath(); x.moveTo(s, H); x.lineTo(s + H, 0); x.stroke(); } x.restore();
      // Costura de pelota de softbol en la esquina
      x.save(); x.strokeStyle = "rgba(255,255,255,.18)"; x.lineWidth = 6; x.beginPath(); x.arc(W + 40, H + 60, 300, Math.PI, 1.5 * Math.PI); x.stroke();
      x.strokeStyle = "rgba(191,13,62,.55)"; x.lineWidth = 4;
      for (var a = 0; a < 14; a++) { var t = Math.PI + a * (Math.PI / 2) / 13, px = W + 40 + Math.cos(t) * 300, py = H + 60 + Math.sin(t) * 300;
        x.beginPath(); x.moveTo(px + Math.cos(t + .9) * 14, py + Math.sin(t + .9) * 14); x.lineTo(px - Math.cos(t + .9) * 14, py - Math.sin(t + .9) * 14); x.stroke(); }
      x.restore();
      // Logo del equipo grande, con brillo
      if (logo) {
        var ls = 330, lr = Math.min(ls / logo.width, ls / logo.height), lw = logo.width * lr, lh = logo.height * lr;
        var gl = x.createRadialGradient(960, 250, 20, 960, 250, 230); gl.addColorStop(0, "rgba(255,255,255,.28)"); gl.addColorStop(1, "rgba(255,255,255,0)");
        x.fillStyle = gl; x.fillRect(700, 0, 500, 500);
        x.save(); x.shadowColor = "rgba(0,0,0,.45)"; x.shadowBlur = 24; x.shadowOffsetY = 10; x.drawImage(logo, 960 - lw / 2, 250 - lh / 2, lw, lh); x.restore();
      }
      // Logo de la Copa y encabezado
      if (copa) { var cr = 150 / copa.width; x.drawImage(copa, 44, 34, 150, copa.height * cr); }
      x.fillStyle = "#F2B705"; x.font = "700 30px " + D; x.textBaseline = "alphabetic";
      x.fillText("COPA CITY 9 · TEMPORADA 2026", 214, 78);
      x.fillStyle = "#fff"; x.font = "italic 800 78px " + D; x.fillText("FANÁTICO OFICIAL", 210, 150);
      x.fillStyle = "rgba(255,255,255,.75)"; x.font = "600 26px " + D; x.fillText("LA COPA DE LAS 9 CIUDADES · LIGA DE LA LIGUA", 214, 188);
      // Nombre
      var nombre = String(d.nombre || "").toUpperCase(), tn = ajustar(x, nombre, 640, 104, "italic 800");
      x.fillStyle = "#fff"; x.shadowColor = "rgba(0,0,0,.35)"; x.shadowBlur = 10; x.fillText(nombre, 44, 330); x.shadowBlur = 0;
      x.font = "700 40px " + D; x.fillStyle = "#fff"; x.fillText(String(eq.nombre || "").toUpperCase(), 48, 330 + 52);
      if (d.ig) { x.font = "600 32px " + D; x.fillStyle = "rgba(255,255,255,.8)"; x.fillText("@" + d.ig, 48, 330 + 98); }
      // Datos del carnet
      var cajas = [["N° DE FANÁTICO", String(d.n || 0).padStart(4, "0")], ["FANÁTICO DESDE", fechaCorta(d.fecha)], ["CÓDIGO", d.cod || ""]];
      var bx = 44, by = 500;
      cajas.forEach(function (c, i) {
        var w = i === 1 ? 236 : 196;
        x.fillStyle = "rgba(4,30,66,.72)"; rr(x, bx, by, w, 112, 14); x.fill();
        x.strokeStyle = "rgba(255,255,255,.16)"; x.lineWidth = 2; x.stroke();
        x.fillStyle = "#AFC0DA"; x.font = "700 21px " + D; x.fillText(c[0], bx + 18, by + 38);
        x.fillStyle = i === 0 ? "#F2B705" : "#fff"; x.font = "italic 800 " + (i === 1 ? 44 : 50) + "px " + D; x.fillText(c[1], bx + 16, by + 90);
        bx += w + 14;
      });
      // QR con su enlace personal
      var qx = 958, qy = 444, qs = 200;
      x.fillStyle = "#fff"; rr(x, qx - 14, qy - 14, qs + 28, qs + 28, 16); x.fill();
      qr(x, d.url || "https://copa-city-9.vercel.app/", qx, qy, qs);
      x.fillStyle = "#fff"; x.font = "700 22px " + D; x.textAlign = "center"; x.fillText("ESCANEA Y SACA TU CARNET", qx + qs / 2, qy + qs + 46); x.textAlign = "left";
      // Franja inferior
      x.fillStyle = "#BF0D3E"; x.fillRect(0, H - 52, W, 52);
      x.fillStyle = "#fff"; x.font = "700 24px " + D; x.fillText("COPA-CITY-9.VERCEL.APP", 44, H - 18);
      x.textAlign = "right"; x.fillText("ESTADIO LA LIGUA PARK · TEMPORADA 2026", W - 44, H - 18); x.textAlign = "left";
      return cv;
    });
  }
  function jpg(cv) { return new Promise(function (ok) { if (cv.toBlob) cv.toBlob(function (b) { ok(b); }, "image/jpeg", .92); else ok(null); }); }
  function nombreArchivo(d) { return "carnet-fanatico-copa-city-9-" + String(d.n || 0).padStart(4, "0") + ".jpg"; }
  function descargar(cv, d) {
    return jpg(cv).then(function (b) {
      var a = document.createElement("a"), u = b ? URL.createObjectURL(b) : cv.toDataURL("image/jpeg", .92);
      a.href = u; a.download = nombreArchivo(d); document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { if (b) URL.revokeObjectURL(u); }, 4000);
    });
  }
  raiz.CARNET = { dibujar: dibujar, jpg: jpg, descargar: descargar, nombreArchivo: nombreArchivo };
})(window);
