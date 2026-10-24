import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const W = ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"];
export function Rotator() {
  const [i, setI] = useState(0);
  const rm = useReducedMotion();
  useEffect(() => { if (rm) return; const t = setInterval(() => setI((n) => (n + 1) % W.length), 2000); return () => clearInterval(t); }, [rm]);
  return (
    <span className="inline-block min-w-[9ch] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span key={W[i]} className="grad inline-block font-bold" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.25 }}>{W[i]}</motion.span>
      </AnimatePresence>
    </span>
  );
}
