import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  };
  return (
    <button onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-11 place-items-center rounded-full border border-line bg-surface transition hover:border-accent active:scale-95">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={dark ? "m" : "s"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
