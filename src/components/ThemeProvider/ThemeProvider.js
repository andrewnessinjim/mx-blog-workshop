"use client";

import React from "react";
import Cookie from "js-cookie";
export const ThemeContext = React.createContext();

function ThemeProvider({ children, initialTheme }) {
  const [currentTheme, setCurrentTheme] = React.useState(initialTheme);

  function toggleTheme() {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(nextTheme);
    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    })
  }

  function isDarkTheme() {
    return currentTheme === "dark";
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
