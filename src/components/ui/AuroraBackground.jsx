import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Global animated backdrop: drifting aurora blobs, a masked grid,
 * soft vignette and film grain. Sits behind all page content and
 * follows the active theme through CSS custom properties.
 */
export default function AuroraBackground() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  // Motion tied to scroll distance rather than total page progress, so the
  // fixed backdrop visibly shifts against the content as you scroll. The
  // drift is capped so the wash never wanders off the viewport.
  const yA = useTransform(scrollY, (value) => Math.min(value * 0.08, 150));
  const yB = useTransform(scrollY, (value) => Math.max(value * -0.06, -120));
  const yC = useTransform(scrollY, (value) => Math.min(value * 0.1, 190));

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="site-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="aurora-wash absolute inset-0" />

      <motion.div
        style={reduce ? undefined : { y: yA }}
        className="absolute left-[-12%] top-[-8%] h-[38rem] w-[38rem] will-change-transform"
      >
        <div className="aurora-blob blob-a absolute inset-0" />
      </motion.div>
      <motion.div
        style={reduce ? undefined : { y: yB }}
        className="absolute right-[-14%] top-[18%] h-[34rem] w-[34rem] will-change-transform"
      >
        <div className="aurora-blob blob-b absolute inset-0" />
      </motion.div>
      <motion.div
        style={reduce ? undefined : { y: yC }}
        className="absolute bottom-[-10%] left-[28%] h-[30rem] w-[30rem] will-change-transform"
      >
        <div className="aurora-blob blob-c absolute inset-0" />
      </motion.div>

      <div className="grid-bg absolute inset-0" />
      <div className="noise absolute inset-0" />
      <div className="site-vignette absolute inset-0" />
    </div>
  );
}
