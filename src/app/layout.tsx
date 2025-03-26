import { AppSidebar } from "@/components/app-sidebar";
import { PreferencesProvider } from "@/components/preferences-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getServerPreferences } from "@/lib/server/cookies";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titanix",
  description: "Ultimate productivity tools",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preferences = await getServerPreferences();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950">
        <PreferencesProvider defaultPreferences={preferences}>
          <ThemeProvider
            attribute="class"
            enableSystem
            defaultTheme={preferences.theme}
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>{children}</SidebarInset>
            </SidebarProvider>
          </ThemeProvider>
        </PreferencesProvider>
      </body>
    </html>
  );
}
