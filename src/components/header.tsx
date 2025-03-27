"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SidebarToggle } from "@/components/sidebar-toggle";

export function Header() {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between p-2">
      <SidebarToggle />
      <ModeToggle />
    </header>
  );
}
