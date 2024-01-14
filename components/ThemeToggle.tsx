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
  const isAppearanceTransition = typeof document !== 'undefined'
    // @ts-expect-error: Transition API
    && document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function toggle(event?: MouseEvent) {
    if (!isAppearanceTransition || !event) {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: theme === 'dark'
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in',
          pseudoElement: theme === 'dark'
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }
  return (
    <div>
      <button onClick={(e: any) => toggle(e)} >

        {
          theme === 'dark' ? <Sun /> : <Moon />
        }

      </button>
    </div >
  )
}

