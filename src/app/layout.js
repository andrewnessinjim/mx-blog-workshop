import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import { BLOG_TITLE } from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";
import ThemeProvidedRoot from "./ThemeProvidedRoot";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

function RootLayout({ children }) {
  return (
    <RespectMotionPreferences>
      <ThemeProvidedRoot
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
      >
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvidedRoot>
    </RespectMotionPreferences>
  );
}

export default RootLayout;
