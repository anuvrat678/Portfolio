import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Drifting colour blobs plus a soft light that trails the pointer.
export function Glow() {
  const x = useMotionValue(-600), y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 60, damping: 20 }), sy = useSpring(y, { stiffness: 60, damping: 20 });
  useEffect(() => { const m = (e) => { x.set(e.clientX - 300); y.set(e.clientY - 300); }; addEventListener("pointermove", m); return () => removeEventListener("pointermove", m); }, []);
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob left-[-10%] top-[-10%] size-[40rem] bg-[radial-gradient(circle,var(--accent),transparent_65%)]" />
      <div className="blob right-[-10%] top-[40%] size-[34rem] bg-[radial-gradient(circle,var(--accent2),transparent_65%)]" style={{ animationDelay: "-8s" }} />
      <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0 hidden size-[600px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_25%,transparent),transparent_65%)] [@media(pointer:fine)]:block" />
    </div>
  );
}
