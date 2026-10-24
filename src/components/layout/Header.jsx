import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, User, Code2, GraduationCap, FolderGit2, Send, FileText } from "lucide-react";
import { NAV, RESUME } from "../../data/content";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ICONS = { Home: Sparkles, About: User, Skills: Code2, Education: GraduationCap, Projects: FolderGit2, Contact: Send };
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  const link = (n, m = "") => {
    const on = active === n.toLowerCase(), I = NAV_ICONS[n];
    return (
      <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} aria-current={on ? "true" : undefined}
        className={`relative isolate flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-ink ${on ? "text-ink" : "text-muted"}`}>
        {on && <motion.span layoutId={"pill" + m} className="absolute inset-0 -z-10 rounded-full bg-accent/15 ring-1 ring-accent/50" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
        {m && <I size={16} />}{n}
      </a>
    );
  };
  return (
    <header className="fixed inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-40 px-3">
      <nav aria-label="Main" className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-line bg-bg/90 md:bg-bg/70 py-2 pl-3 pr-2 shadow-xl shadow-black/10 md:backdrop-blur-xl">
        <a href="#home" aria-label="Anuvrat Singh Rajpurohit, home" className="flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-display text-xl font-bold text-on-accent">A</span>
          <span className="hidden font-display font-bold lg:inline">Anuvrat</span>
        </a>
        <div className="hidden items-center md:flex">{NAV.map((n) => link(n))}</div>
        <div className="flex items-center gap-2">
          <a href={RESUME} target="_blank" rel="noreferrer" className="hidden min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition hover:opacity-90 lg:inline-flex"><FileText size={14} />Resume</a>
          <ThemeToggle />
          <button className="grid size-11 place-items-center rounded-full border border-line bg-surface md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-4xl rounded-3xl border border-line bg-bg/90 p-2 md:backdrop-blur-xl md:hidden">
            <div className="flex flex-col">{NAV.map((n) => link(n, "m"))}<a href={RESUME} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent"><FileText size={16} />Resume</a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
