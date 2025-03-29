import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'
import { SidebarProvider } from './ui/sidebar'
import { TooltipProvider } from './ui/tooltip'

export const Providers = ({ children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <SidebarProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
