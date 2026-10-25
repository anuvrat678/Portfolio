import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { L, EMAIL, NAV, RESUME } from "../../data/content";
import { Spot, Mag, Tech } from "../fx";
import { primary } from "../ui/styles";

export function Footer() {
  const social = [[Github, "GitHub", L.github], [Linkedin, "LinkedIn", L.linkedin], [Mail, "Email", `mailto:${EMAIL}`]];
  const ext = (h) => (h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line">
      <div className="mx-auto max-w-5xl px-5 pt-16">
        <Spot className="rounded-3xl border border-line bg-surface/70 p-6 sm:p-12">
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">Let’s build something practical together.</h2>
          <p className="mt-4 max-w-lg text-muted">Open to opportunities and conversations about web development.</p>
          <div className="mt-8"><Mag><a href={`mailto:${EMAIL}`} className={`${primary} h-auto max-w-full break-all py-3 text-center`}><Mail size={16} />{EMAIL}</a></Mag></div>
        </Spot>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-display font-bold text-on-accent">AS</span>
              <div><p className="font-display text-lg font-bold">Anuvrat Singh Rajpurohit</p><p className="text-sm text-muted">MCA Student | Aspiring Full-Stack Developer</p></div>
            </div>
            <div className="mt-6 flex gap-3">
              {social.map(([I, n, h]) => <a key={n} href={h} {...ext(h)} aria-label={n} className="grid size-11 place-items-center rounded-full border border-line bg-surface transition hover:-translate-y-1 hover:border-accent2 hover:text-accent2"><I size={18} /></a>)}
            </div>
          </div>
          <nav aria-label="Footer">
            <h3 className="font-display font-bold">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">{NAV.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-ink">{n}</a></li>)}<li><a href={RESUME} target="_blank" rel="noreferrer" className="hover:text-ink">Resume</a></li></ul>
          </nav>
          <div>
            <h3 className="font-display font-bold">Projects</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href={L.turfLive} target="_blank" rel="noreferrer" className="hover:text-ink">TurfBook live demo</a></li>
              <li><a href={L.turfRepo} target="_blank" rel="noreferrer" className="hover:text-ink">TurfBook source</a></li>
              <li><a href={L.farmRepo} target="_blank" rel="noreferrer" className="hover:text-ink">Farm Dashboard source</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-line pt-8">
          <span className="mr-2 text-sm text-muted">Built with</span>
          {["React.js", "Vite", "Tailwind CSS", "Node.js", "Git"].map((t) => <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-muted"><Tech n={t} size={16} />{t}</span>)}
          <span className="inline-flex rounded-full border border-line px-3 py-1.5 text-sm text-muted">Motion</span>
        </div>
        <div className="mt-8 flex items-center justify-between text-sm text-muted">
          <p>© {new Date().getFullYear()} Anuvrat Singh Rajpurohit</p>
          <a href="#home" aria-label="Back to top" className="grid size-11 place-items-center rounded-full border border-line bg-surface transition hover:-translate-y-1 hover:border-accent"><ArrowUp size={16} /></a>
        </div>
      </div>
      <p aria-hidden="true" className="stroke pointer-events-none select-none whitespace-nowrap text-center font-display text-[17vw] font-bold leading-[0.8] opacity-25 translate-y-[12%]">Anuvrat</p>
    </footer>
  );
}
