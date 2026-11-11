import { useRef } from "react";
import { Link } from "react-router";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const MotionLink = motion.create(Link);

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-accent-soft via-accent to-accent-4 text-accent-fg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30",
  secondary:
    "glass text-fg hover:border-accent/35 hover:bg-surface-hover hover:text-strong",
  dark: "bg-surface-hover text-strong ring-1 ring-inset ring-hairline-strong hover:bg-surface hover:ring-accent/30",
  ghost: "text-muted hover:text-strong",
};

/**
 * Pill button with a subtle magnetic pull + sheen sweep.
 * Renders a router Link, a normal anchor, or a button depending on props.
 */
export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.22,
  download,
  type = "button",
  ariaLabel,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.3 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.3 });

  const handleMove = (event) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((event.clientX - rect.left - rect.width / 2) * strength);
    rawY.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const classes = [
    "shine group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-300",
    VARIANTS[variant] ?? VARIANTS.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    ref,
    className: classes,
    style: { x, y },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.97 },
    "aria-label": ariaLabel,
  };

  if (to) {
    return (
      <MotionLink to={to} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
