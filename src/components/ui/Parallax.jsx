import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked drift wrapper. Transform values are expressed in pixels
 * (or a percentage string) and interpolated between the two scroll edges.
 *
 * Reduced-motion users get a plain, static element.
 */
export default function Parallax({
  children,
  className = "",
  from = 28,
  to = -28,
  axis = "y",
  offset = ["start end", "end start"],
  scaleFrom,
  scaleTo,
  ...rest
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const translate = useTransform(scrollYProgress, [0, 1], [from, to]);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom ?? 1, scaleTo ?? 1]);
  const hasScale = scaleFrom != null || scaleTo != null;

  const style = reduce
    ? undefined
    : {
        [axis]: translate,
        ...(hasScale ? { scale } : {}),
      };

  return (
    <motion.div ref={ref} style={style} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
