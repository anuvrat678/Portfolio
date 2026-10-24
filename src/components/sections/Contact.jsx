import { useState } from "react";
import { Mail, Github, Linkedin, Loader2, Check } from "lucide-react";
import { EMAIL, L } from "../../data/content";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ContactArt } from "../fx";
import { primary } from "../ui/styles";

function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("idle");
  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = "Enter your full name.";
    if (!f.email.trim()) e.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address, like name@example.com.";
    if (!f.subject.trim()) e.subject = "Enter a subject.";
    if (f.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
    return e;
  };
  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (!r.ok) throw new Error();
      setStatus("ok");
      setF({ name: "", email: "", subject: "", message: "" });
    } catch { setStatus("error"); }
  };
  const field = (k, label, type = "text") => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{label}</label>
      {k === "message"
        ? <textarea id={k} rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className="w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-base" />
        : <input id={k} type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className="min-h-11 w-full rounded-lg border border-line bg-bg px-3 text-base" />}
      {err[k] && <p id={`${k}-e`} className="mt-1 text-sm text-red-500">{err[k]}</p>}
    </div>
  );
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
      <div className="space-y-5 text-muted">
        <ContactArt />
        <p className="leading-relaxed">Have a question or an opportunity to discuss? Send a message and I will reply by email.</p>
        <a className="flex items-center gap-2 hover:text-ink" href={`mailto:${EMAIL}`}><Mail size={16} />{EMAIL}</a>
        <a className="flex items-center gap-2 hover:text-ink" href={L.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
        <a className="flex items-center gap-2 hover:text-ink" href={L.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
      </div>
      <Card>
        <form onSubmit={submit} noValidate className="space-y-4">
          {field("name", "Full name")}{field("email", "Email address", "email")}{field("subject", "Subject")}{field("message", "Message")}
          <button type="submit" disabled={status === "sending"} className={`${primary} w-full disabled:opacity-60`}>
            {status === "sending" ? <><Loader2 size={16} className="animate-spin" />Sending message</> : "Send message"}
          </button>
          <div aria-live="polite" className="text-sm">
            {status === "ok" && <p className="flex items-center gap-2 text-green-500"><Check size={16} />Message sent. I will reply to your email address.</p>}
            {status === "error" && <p className="text-red-500">The message was not sent. Try again, or email {EMAIL} directly.</p>}
          </div>
        </form>
      </Card>
    </div>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ContactForm />
    </Section>
  );
}
