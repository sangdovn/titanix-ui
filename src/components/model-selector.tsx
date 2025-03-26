"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { chatModels } from "@/lib/ai/models";
import { setServerPreferences } from "@/lib/server/cookies";
import { usePreferencesStore } from "@/lib/stores/preferences-store";
import { ChevronDown, CircleCheck } from "lucide-react";
import { startTransition, useMemo, useOptimistic } from "react";

export default function ModelSelector() {
  const { chatModelId, setChatModelId } = usePreferencesStore();
  const [optimisticModelId, setOptimisticModelId] = useOptimistic(chatModelId);

  const selectedChatModel = useMemo(
    () => chatModels.find((chatModel) => chatModel.id === optimisticModelId),
    [optimisticModelId]
  );

  const changeChatModel = (id: string) => {
    startTransition(() => {
      setOptimisticModelId(id);
      setChatModelId(id);
      setServerPreferences({ chatModelId: id });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedChatModel?.name} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[300px]">
        {chatModels.map((chatModel) => {
          const { id } = chatModel;

          return (
            <DropdownMenuItem
              key={id}
              onSelect={() => changeChatModel(id)}
              data-active={id === optimisticModelId}
              asChild
            >
              <button
                type="button"
                className="group/item flex w-full cursor-pointer flex-row items-center justify-between gap-4"
              >
                <div className="flex flex-col items-start gap-1">
                  <div>{chatModel.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {chatModel.description}
                  </div>
                </div>
                <div className="text-foreground opacity-0 group-data-[active=true]/item:opacity-100">
                  <CircleCheck size={24} fill="black" color="white" />
                </div>
              </button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
