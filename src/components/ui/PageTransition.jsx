import { motion } from "framer-motion";
import { useLocation } from "react-router";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Fades and lifts each route's content on navigation.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
