import { RootLayout } from '@/components/layout'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Titanix',
  description: 'The ultimate tool for your productivity',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
