import HeroScrollDemo from "@/components/container-scroll-animation-demo"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="wealthberry-theme"
      forcedTheme={null}
    >
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroScrollDemo />
      </main>
    </ThemeProvider>
  )
}

