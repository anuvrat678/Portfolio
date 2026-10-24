import { motion } from "motion/react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

const SAT = [[Mail, "left-[8%] top-[16%]", 0], [Github, "right-[10%] top-[12%]", 0.8], [Linkedin, "right-[16%] bottom-[10%]", 1.6]];
export function ContactArt() {
  const still = typeof matchMedia !== "undefined" && matchMedia("(max-width: 767px)").matches;
  return (
    <div aria-hidden="true" className="relative mx-auto grid h-44 sm:h-56 w-full max-w-sm place-items-center overflow-hidden rounded-3xl border border-line bg-surface/60">
      {[1, 2, 3].map((i) => <motion.span key={i} className="absolute rounded-full border border-accent/40" style={{ width: i * 90, height: i * 90 }} animate={still ? undefined : { scale: [1, 1.12, 1], opacity: [0.9, 0.3, 0.9] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} />)}
      <motion.div animate={still ? undefined : { y: [0, -8, 0], rotate: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-on-accent shadow-xl"><Send size={34} /></motion.div>
      {SAT.map(([I, pos, d], i) => <motion.span key={i} className={`absolute grid size-10 place-items-center rounded-full border border-line bg-bg ${pos}`} animate={still ? undefined : { y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: d }}><I size={16} /></motion.span>)}
    </div>
  );
}
