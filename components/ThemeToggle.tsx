"use client"


import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      <button onClick={(e: any) => setTheme(theme === 'dark' ? 'light' : 'dark')} >

        {
          theme === 'dark' ? <Sun /> : <Moon />
        }

      </button>
    </div >
  )
}

