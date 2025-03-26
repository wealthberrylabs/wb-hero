"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Initialize theme from localStorage on client side
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("wealthberry-theme")
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
      document.documentElement.style.colorScheme = savedTheme
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

