"use client";

import { createContext, useContext } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  toggle: () => void;
}>({
  toggle: () => undefined,
});

function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("devtoolio-theme", next);
  }

  return <ThemeContext.Provider value={{ toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
