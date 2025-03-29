'use client'

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Button } from './ui/button'
import { useSidebar } from './ui/sidebar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export const SidebarToggle = () => {
  const { open, toggleSidebar } = useSidebar()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer"
          size="icon"
          onClick={() => toggleSidebar()}
        >
          {open ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </TooltipTrigger>
      <TooltipContent align="start">
        <p>Sidebar Toggle</p>
      </TooltipContent>
    </Tooltip>
  )
}
