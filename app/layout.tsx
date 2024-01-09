import type { Metadata } from 'next'

import '../public/assets/css/app.css'


export const metadata: Metadata = {
  title: 'Next js Starter',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
