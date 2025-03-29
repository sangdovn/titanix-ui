import { AppSidebar } from './app-sidebar'
import { Providers } from './providers'
import { SidebarInset } from './ui/sidebar'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </Providers>
  )
}
