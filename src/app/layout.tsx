import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme'

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
        <link rel="icon" href="/favicon.ico" type="image/gif" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
