
import type { Metadata } from 'next'

import '../public/assets/css/tailwind.css'

import { Providers } from "./providers";


export const metadata: Metadata = {
  title: 'Next js Starter',


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning >
      <body>
        <Providers>
            {children}
        </Providers>

      </body>
    </html>
  )
}
