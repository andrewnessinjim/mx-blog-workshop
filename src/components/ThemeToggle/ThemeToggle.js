"use client";

import React from "react";

import styles from "./ThemeToggle.module.css";

import { Sun, Moon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import { ThemeContext } from "../ThemeProvider";

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button className={styles.action} onClick={toggleTheme}>
      {isDarkTheme() ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default ThemeToggle;
