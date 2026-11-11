import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext, THEME_STORAGE_KEY } from "./theme-context";

const THEME_COLORS = {
  dark: "#05070d",
  light: "#f3f5fa",
};

const isTheme = (value) => value === "dark" || value === "light";

/**
 * The inline script in index.html sets data-theme before first paint, so the
 * provider simply adopts whatever the document already says. This keeps the
 * React state and the DOM perfectly in sync with zero flash.
 */
const readInitialTheme = () => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.backgroundColor = THEME_COLORS[theme];

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* Storage can be unavailable in private/embedded contexts. */
    }
  }, [theme]);

  // Keep multiple tabs in sync with the same preference.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== THEME_STORAGE_KEY || !isTheme(event.newValue)) return;
      setTheme(event.newValue);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => (previous === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
