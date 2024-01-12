"use client"

import { AppStore, makeStore } from '@/stores/store'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useRef } from 'react'
import { Provider } from 'react-redux'


export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return (
    <Provider store={storeRef.current}>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>

  )
}
