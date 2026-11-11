import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * A soft light that follows the pointer across the whole page.
 * Colours come from the theme tokens, so it adapts to light mode.
 * Disabled for touch devices and reduced-motion users.
 */
export default function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduce, x, y]);

  const background = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, var(--cursor-1), var(--cursor-2) 35%, transparent 65%)`;

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{ background }}
    />
  );
}
