"use client"
import type React from "react"

interface BrowserWindowProps {
  children: React.ReactNode
  url?: string
  title?: string
  variant?: "light" | "dark"
}

export function BrowserWindow({
  children,
  url = "https://example.com",
  title = "Browser",
  variant = "light",
}: BrowserWindowProps) {
  const isDark = variant === "dark"

  return (
    <div className="w-full h-full overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.02),0_4px_4px_rgba(0,0,0,0.03),0_8px_8px_rgba(0,0,0,0.04),0_16px_16px_rgba(0,0,0,0.05),0_32px_32px_rgba(0,0,0,0.06)] bg-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_8px_8px_rgba(0,0,0,0.1),0_16px_16px_rgba(0,0,0,0.1),0_32px_32px_rgba(0,0,0,0.1)]">
      {/* Browser Chrome */}
      <div className={`h-11 ${isDark ? "bg-[#0f0f0f]" : "bg-[#f0f0f0]"} flex items-center px-4 rounded-t-xl`}>
        {/* Traffic Lights */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>

        {/* Title */}
        <div className="flex-1 flex justify-center">
          <div
            className={`${isDark ? "bg-[#1a1a1a]" : "bg-[#e0e0e0]"} rounded-md px-3 py-1 text-xs ${isDark ? "text-gray-300" : "text-gray-600"} flex items-center space-x-2 max-w-[300px] truncate`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <span className="truncate">alvinai.app</span>
          </div>
        </div>

        {/* Browser Controls */}
        <div className={`flex space-x-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>

      {/* Browser Content - Different background based on variant */}
      <div className={`w-full h-[calc(100%-2.75rem)] ${isDark ? "bg-[#231123]" : "bg-[#f0f8fb]"}`}>{children}</div>
    </div>
  )
}

