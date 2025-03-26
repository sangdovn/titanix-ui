"use client";

import { ModeToggle } from "@/components/mode-toggle";
import ModelSelector from "@/components/model-selector";
import { SidebarToggle } from "@/components/sidebar-toggle";

export function ChatHeader() {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between p-2">
      <div className="flex flex-row items-center justify-between gap-2">
        <SidebarToggle />
        <ModelSelector />
      </div>
      <ModeToggle />
    </header>
  );
}
