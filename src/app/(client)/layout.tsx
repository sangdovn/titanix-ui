import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Titanix',
  description: 'The ultimate tool for your productivity',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
