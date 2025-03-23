"use client";

import { Button } from "@/components/ui/button";
import ModelSelector from "./model-selector";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

export default function ChatHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 px-2 py-1.5">
      <Button variant="outline" size="icon" onClick={toggleSidebar}>
        <SidebarTrigger />
      </Button>
      <ModelSelector />
    </header>
  );
}
