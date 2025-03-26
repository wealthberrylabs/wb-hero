"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Direct DOM manipulation as a fallback method
  const forceThemeChange = (newTheme: string) => {
    // Update theme using next-themes
    setTheme(newTheme)

    // Also directly manipulate DOM for immediate visual feedback
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
      localStorage.setItem("wealthberry-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
      localStorage.setItem("wealthberry-theme", "light")
    }

    // Dispatch a custom event that our components can listen for
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { theme: newTheme } }))
  }

  const toggleTheme = () => {
    const currentTheme = theme || (document.documentElement.classList.contains("dark") ? "dark" : "light")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    console.log(`Toggling theme from ${currentTheme} to ${newTheme}`)
    forceThemeChange(newTheme)

    // Log the state after change
    setTimeout(() => {
      console.log({
        themeAfterChange: document.documentElement.classList.contains("dark") ? "dark" : "light",
        localStorageTheme: localStorage.getItem("wealthberry-theme"),
        nextThemesTheme: theme,
      })
    }, 100)
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 opacity-0">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = theme === "dark" || document.documentElement.classList.contains("dark")

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-700" />
      )}
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
    </Button>
  )
}

