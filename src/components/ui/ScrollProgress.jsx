import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Gradient reading-progress bar pinned to the top of the viewport.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-accent-soft via-accent-4 to-accent-2 shadow-[0_0_18px_rgba(45,212,191,0.55)]"
      style={{ scaleX }}
    />
  );
}
