import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Image layer that drifts inside its (overflow-hidden) frame as the page
 * scrolls. The layer is oversized relative to the drift so the movement
 * never exposes an edge. Drop it inside any `relative overflow-hidden`
 * container.
 */
export default function ParallaxMedia({
  src,
  alt = "",
  imgClassName = "",
  amount = 8,
  loading = "lazy",
  position = "object-top",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-amount}%`, `${amount}%`]);

  // Keep at least as much bleed as the translated distance, plus a small
  // safety margin, so the frame never shows a gap at either extreme.
  const bleed = amount * 1.5 + 3;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={
          reduce
            ? { top: `-${bleed}%`, height: `${100 + bleed * 2}%` }
            : { top: `-${bleed}%`, height: `${100 + bleed * 2}%`, y }
        }
        className="absolute inset-x-0 will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`h-full w-full object-cover ${position} ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}
