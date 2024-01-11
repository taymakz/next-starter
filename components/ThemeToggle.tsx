"use client"


import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} >

        {
          theme === 'dark' ? <Sun /> : <Moon />
        }

      </button>
    </div>
  )
}

