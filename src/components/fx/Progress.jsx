import { motion, useScroll, useSpring } from "motion/react";

export function Progress() {
  const { scrollYProgress } = useScroll();
  const s = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div aria-hidden="true" style={{ scaleX: s }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-accent to-accent2" />;
}
