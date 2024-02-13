import ThemeProvider from "@/components/ThemeProvider";
import ThemedRoot from "./ThemedRoot";

import { cookies } from "next/headers";

function ThemeProvidedRoot({ children }) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";
  return (
    <ThemeProvider initialTheme={theme}>
      <ThemedRoot>{children}</ThemedRoot>
    </ThemeProvider>
  );
}

export default ThemeProvidedRoot;
