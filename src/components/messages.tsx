"use client";

import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import { UseChatHelpers } from "@ai-sdk/react";
import { UIMessage } from "ai";
import equal from "fast-deep-equal";
import { memo } from "react";
import { MessagePreview } from "./message";

function PureMessages({
  messages,
  status,
}: {
  messages: Array<UIMessage>;
  status: UseChatHelpers["status"];
}) {
  const [containerRef, endRef] = useScrollToBottom<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className="flex min-w-0 grow flex-col gap-6 overflow-x-hidden overflow-y-auto pt-4"
      style={{ scrollbarWidth: "thin" }}
    >
      {messages.map((msg, index) => (
        <MessagePreview
          message={msg}
          isLoading={status === "streaming" && messages.length - 1 === index}
        />
      ))}

      {/* Anchor at the bottom of the chat */}
      <div ref={endRef} className="min-h-6 min-w-6 shrink-0"></div>
    </div>
  );
}

export const Messages = memo(PureMessages, (prevProps, nextProps) => {
  if (prevProps.status !== nextProps.status) return false;
  if (prevProps.status && nextProps.status) return false;
  if (prevProps.messages.length !== nextProps.messages.length) return false;
  if (!equal(prevProps.messages, nextProps.messages)) return false;
  return true;
});
