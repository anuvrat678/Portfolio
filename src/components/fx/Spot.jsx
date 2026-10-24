import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Card with a cursor-following spotlight and optional 3D tilt.
export function Spot({ children, className = "", tilt }) {
  const r = useRef(), rx = useMotionValue(0), ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 150, damping: 15 }), sy = useSpring(ry, { stiffness: 150, damping: 15 });
  const mv = (e) => {
    const b = r.current.getBoundingClientRect(), px = e.clientX - b.left, py = e.clientY - b.top;
    r.current.style.setProperty("--mx", px + "px"); r.current.style.setProperty("--my", py + "px");
    if (tilt) { ry.set((px / b.width - 0.5) * 6); rx.set(-(py / b.height - 0.5) * 6); }
  };
  return <motion.div ref={r} onMouseMove={mv} onMouseLeave={() => { rx.set(0); ry.set(0); }} style={tilt ? { rotateX: sx, rotateY: sy, transformPerspective: 900 } : undefined} className={`spot ${className}`}>{children}</motion.div>;
}
