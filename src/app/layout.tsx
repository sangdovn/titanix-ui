import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titanix",
  description: "Ultimate productivity tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar className="border-none" />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
