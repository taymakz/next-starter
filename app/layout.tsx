
import type { Metadata } from 'next'

import '../public/assets/css/tailwind.css'

import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: 'Next js Starter',
  

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl" className='dark'>
      <body>
        <Providers>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Providers>

      </body>
    </html>
  )
}
