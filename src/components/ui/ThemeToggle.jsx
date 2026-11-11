import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "./theme-context";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Compact icon button that flips between the dark and light token sets.
 * The icon animates on a vertical track so the change feels physical.
 */
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      whileTap={{ scale: 0.92 }}
      className={`group relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-hairline bg-surface text-muted transition-colors duration-300 hover:border-accent/45 hover:text-accent ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-accent/0 transition-colors duration-300 group-hover:bg-accent/10"
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 18, opacity: 0, rotate: -50 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -18, opacity: 0, rotate: 50 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="relative grid place-items-center"
        >
          {isDark ? (
            <HiOutlineSun className="text-[1.12rem]" />
          ) : (
            <HiOutlineMoon className="text-[1.05rem]" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
