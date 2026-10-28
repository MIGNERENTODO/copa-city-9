// Buzón de sugerencias. Guarda el mensaje para el panel privado y, si está
// configurado, lo envía por correo (Resend: RESEND_API_KEY y CORREO_DESTINO).
const crypto = require("crypto");
const { pipe, huella, cuerpo, enviar, fallo, P } = require("./_db");

const limpiar = (s, max) => String(s == null ? "" : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);

async function correo(s) {
  const key = process.env.RESEND_API_KEY, para = process.env.CORREO_DESTINO || "mignerentodo@gmail.com";
  if (!key) return;
  const texto = "Tipo: " + s.tipo + "\nNombre: " + (s.nombre || "(sin nombre)") + "\nContacto: " + (s.contacto || "(sin contacto)") +
    "\nFecha: " + new Date(s.fecha).toLocaleString("es-CL", { timeZone: "America/Santiago" }) + "\n\n" + s.mensaje;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CORREO_REMITENTE || "Copa City 9 <onboarding@resend.dev>",
        to: [para],
        subject: "Buzón Copa City 9 · " + s.tipo + (s.nombre ? " de " + s.nombre : ""),
        text: texto
      })
    });
  } catch (e) { console.error("No se pudo enviar el correo", e); }
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") return enviar(res, 405, { error: "Método no permitido" });
    const b = cuerpo(req);
    if (b.web) return enviar(res, 200, { ok: true }); // trampa para robots
    const tipos = ["Sugerencia", "Reclamo", "Felicitación", "Otro"];
    const s = {
      id: crypto.randomBytes(6).toString("hex"),
      fecha: new Date().toISOString(),
      tipo: tipos.indexOf(b.tipo) >= 0 ? b.tipo : "Sugerencia",
      nombre: limpiar(b.nombre, 80),
      contacto: limpiar(b.contacto, 120),
      mensaje: limpiar(b.mensaje, 1500)
    };
    if (s.mensaje.length < 3) return enviar(res, 400, { error: "Mensaje vacío" });
    const rl = P + "sug:limite:" + huella(req);
    const [cuenta] = await pipe([["INCR", rl], ["EXPIRE", rl, 3600]]);
    if ((parseInt(cuenta, 10) || 0) > 5) return enviar(res, 429, { error: "Demasiados mensajes" });
    await pipe([["LPUSH", P + "sugerencias", JSON.stringify(s)], ["LTRIM", P + "sugerencias", 0, 1999]]);
    await correo(s);
    return enviar(res, 200, { ok: true });
  } catch (e) { return fallo(res, e); }
};
