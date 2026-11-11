import { createContext, useContext } from "react";

export const THEME_STORAGE_KEY = "theme";

/**
 * Shape is intentionally stable so consumers never have to guard against
 * an undefined context while the provider is mounting.
 */
export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
