"use client";

import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const Outfitlocal = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const Ovolocal = Ovo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ovo",
});

// Remove the metadata export since it's not compatible with client components
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Handle initial dark mode
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Scroll to top on page reload
    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Outfitlocal.variable} ${Ovolocal.variable} 
        transition-colors duration-300 bg-white dark:bg-darkTheme`}
      >
        {children}
      </body>
    </html>
  );
}
