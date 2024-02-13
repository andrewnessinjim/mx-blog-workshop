"use client";

import { ThemeContext } from "@/components/ThemeProvider";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import React from "react";

function ThemedRoot(props) {
  const { currentTheme } = React.useContext(ThemeContext);

  return (
      <html
        data-color-theme={currentTheme}
        style={currentTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
        {...props}
      />
  );
}

export default ThemedRoot;
