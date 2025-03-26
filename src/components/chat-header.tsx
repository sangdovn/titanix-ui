"use client";

import { ModeToggle } from "./mode-toggle";
import ModelSelector from "./model-selector";
import { SidebarToggle } from "./sidebar-toggle";

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
