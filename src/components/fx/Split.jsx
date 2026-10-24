import { motion } from "motion/react";

// Per-letter spring reveal (on load, or on scroll with `view`).
export function Split({ t, d = 0, view, cls = "" }) {
  const a = { y: 0, rotate: 0, opacity: 1 };
  const p = view ? { whileInView: a, viewport: { once: true } } : { animate: a };
  return t.split("").map((c, i) => (
    <motion.span key={i} aria-hidden="true" className={`inline-block ${cls}`} initial={{ y: "110%", rotate: 8, opacity: 0 }} {...p}
      transition={{ delay: d + i * 0.03, type: "spring", damping: 18, stiffness: 140 }}>{c === " " ? "\u00A0" : c}</motion.span>
  ));
}
