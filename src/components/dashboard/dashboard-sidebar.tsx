'use client'

import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NavProjects } from './nav-projects'

function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex flex-row items-center justify-start gap-4">
                <Image src="/titanix.png" alt="Logo" width={36} height={36} />
                <span className="text-2xl font-bold">Titanix</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <SidebarMenu>
          <div className="flex flex-row items-center justify-between gap-2">
            <Button className="flex-1">Sign In</Button>
            <Button variant="secondary" className="flex-1">
              Sign Up
            </Button>
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

function DashboardSidebarToggle() {
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

export { DashboardSidebar, DashboardSidebarToggle }
