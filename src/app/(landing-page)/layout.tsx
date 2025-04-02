import { SidebarProvider } from '@/components/ui/sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titanix',
  description: 'The ultimate tool for your productivity',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SidebarProvider>{children}</SidebarProvider>
}
