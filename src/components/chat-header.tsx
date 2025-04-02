'use client'

import { DashboardSidebarToggle } from '@/components/dashboard/dashboard-sidebar'
import { Plus } from 'lucide-react'
import { ThemeToggle } from './theme'
import { Button } from './ui/button'

export function ChatHeader({ newChat }: { newChat: () => void }) {
  return (
    <header className="sticky inset-x-0 top-0 flex flex-row items-center justify-between p-2">
      <div className="flex flex-row items-center justify-between gap-2">
        <DashboardSidebarToggle />
        <Button variant="outline" className="cursor-pointer" onClick={() => newChat()}>
          New Chat <Plus />
        </Button>
      </div>
      <ThemeToggle />
    </header>
  )
}
