'use client'

import { SidebarToggle } from './sidebar-toggle'
import { ThemeToggle } from './theme-toggle'

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between gap-2 p-2">
      <SidebarToggle />
      <ThemeToggle />
    </header>
  )
}
