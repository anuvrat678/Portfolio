import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

// Dot + lagging ring cursor (fine pointers only, off for reduced motion).
export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 150, damping: 18 }), ry = useSpring(y, { stiffness: 150, damping: 18 });
  const [big, setBig] = useState(false), [on, setOn] = useState(false), rm = useReducedMotion();
  useEffect(() => {
    if (rm || !matchMedia("(pointer:fine)").matches) return;
    setOn(true); document.documentElement.classList.add("cc");
    const m = (e) => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest?.("a,button,input,textarea")); };
    addEventListener("pointermove", m);
    return () => { removeEventListener("pointermove", m); document.documentElement.classList.remove("cc"); };
  }, [rm]);
  if (!on) return null;
  return (
    <>
      <motion.div aria-hidden="true" style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[60]"><div className="-ml-1 -mt-1 size-2 rounded-full bg-accent" /></motion.div>
      <motion.div aria-hidden="true" style={{ x: rx, y: ry }} className="pointer-events-none fixed left-0 top-0 z-[60]"><motion.div animate={{ scale: big ? 1.8 : 1 }} className="-ml-4 -mt-4 size-8 rounded-full border-2 border-accent2" /></motion.div>
    </>
  );
}
