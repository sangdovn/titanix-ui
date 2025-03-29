'use client'

import { Plus } from 'lucide-react'
import { SidebarToggle } from './sidebar-toggle'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export function ChatHeader({ newChat }: { newChat: () => void }) {
  return (
    <header className="sticky inset-x-0 top-0 flex flex-row items-center justify-between p-2">
      <div className="flex flex-row items-center justify-between gap-2">
        <SidebarToggle />
        <Button variant="outline" className="cursor-pointer" onClick={() => newChat()}>
          New Chat <Plus />
        </Button>
      </div>
      <ThemeToggle />
    </header>
  )
}
