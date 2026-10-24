// Vercel serverless function. Sends the form via Resend's REST API.
// Env vars (set in Vercel): RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  const { name, email, subject, message } = req.body || {};
  const ok = (v, n) => typeof v === "string" && v.trim().length > 0 && v.length <= n;
  if (!ok(name, 100) || !ok(email, 200) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !ok(subject, 200) || !ok(message, 5000))
    return res.status(400).json({ ok: false });
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) return res.status(500).json({ ok: false });
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Portfolio: ${subject}`,
      html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
}
