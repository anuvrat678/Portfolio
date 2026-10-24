import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Button that leans toward the pointer.
export function Mag({ children }) {
  const r = useRef(), x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14 }), sy = useSpring(y, { stiffness: 220, damping: 14 });
  return (
    <motion.span ref={r} style={{ x: sx, y: sy }} className="inline-block"
      onMouseMove={(e) => { const b = r.current.getBoundingClientRect(); x.set((e.clientX - b.left - b.width / 2) * 0.3); y.set((e.clientY - b.top - b.height / 2) * 0.3); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.span>
  );
}
