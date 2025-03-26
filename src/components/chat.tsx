"use client";

import { ChatHeader } from "@/components/chat-header";
import { Messages } from "@/components/messages";
import { MultimodalInput } from "@/components/multimodal-input";
import { useChat } from "@ai-sdk/react";

export function Chat() {
  const { messages, input, setInput, handleSubmit, status } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex h-dvh min-w-0 flex-col">
      <ChatHeader />

      <Messages messages={messages} status={status} />

      <MultimodalInput
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        status={status}
      />
    </div>
  );
}
