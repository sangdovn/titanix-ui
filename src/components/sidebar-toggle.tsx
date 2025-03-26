import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PanelLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={toggleSidebar}>
            <PanelLeft />
          </Button>
        </TooltipTrigger>
        <TooltipContent align="start">
          <p>Toggle Sidebar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
