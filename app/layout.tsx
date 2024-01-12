
import type { Metadata } from 'next'

import '@/public/assets/css/tailwind.css'

import { Providers } from "./providers";
import { Toaster } from '@/components/ui/sonner';


export const metadata: Metadata = {
  title: 'Next js Starter',


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>

      </body>
    </html>
  )
}
