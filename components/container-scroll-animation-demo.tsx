"use client"
import { useEffect, useState } from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"
import { BrowserWindow } from "@/components/ui/browser-window"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HeroScrollDemo() {
  const [mounted, setMounted] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Handle theme detection and changes
  useEffect(() => {
    // Set mounted state
    setMounted(true)

    // Initial theme detection
    const detectTheme = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        localStorage.getItem("wealthberry-theme") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          localStorage.getItem("wealthberry-theme") !== "light")

      setIsDarkTheme(isDark)
    }

    detectTheme()

    // Listen for theme changes
    const handleThemeChange = () => {
      detectTheme()
    }

    window.addEventListener("themeChange", handleThemeChange)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange)

    return () => {
      window.removeEventListener("themeChange", handleThemeChange)
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleThemeChange)
    }
  }, [])

  // Don't render image until after hydration to avoid mismatch
  if (!mounted) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="flex flex-col overflow-hidden relative w-full">
      {/* Background with exact matching colors */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[#9d7fe3] via-[#7c5bd2] to-[#5e4fc9]">
        {/* Curved lines overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/wealthberry-wave-bg.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "soft-light",
            opacity: 0.7,
          }}
        />
      </div>

      <ThemeToggle />

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white relative z-20">
              Introducing <br />
              <span
                className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #fcd34d 0%, #ec4899 70%, #8b5cf6 85%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundSize: "200% 100%",
                }}
              >
                ALVIN
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mt-4 relative z-20 mb-8">
              The World's First Adaptive Legacy Platform
            </p>
          </>
        }
      >
        {isDarkTheme ? (
          <BrowserWindow url="alvinai.app" title="ALVIN - Your Financial AI Assistant" variant="dark">
            <div className="w-full h-full bg-[#231123]">
              <Image
                src="/wb-hero-dark.png"
                alt="ALVIN AI Financial Assistant - Dark Mode"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </BrowserWindow>
        ) : (
          <BrowserWindow url="alvinai.app" title="ALVIN - Your Financial AI Assistant" variant="light">
            <div className="w-full h-full bg-[#f0f8fb]">
              <Image
                src="/wb-hero.png"
                alt="ALVIN AI Financial Assistant - Light Mode"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </BrowserWindow>
        )}
      </ContainerScroll>
    </div>
  )
}

