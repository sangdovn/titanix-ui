"use client";

import ChatHeader from "@/components/chat-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@ai-sdk/react";
import { Paperclip, Send, Square } from "lucide-react";
import { useRef } from "react";

export default function Chat() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const { messages, input, handleInputChange, handleSubmit, status, error, stop } =
    useChat({});

  const handleInput = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height before recalculating
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content
    }
  };

  return (
    <div className="bg-background flex h-dvh min-w-0 flex-col">
      <ChatHeader />
      <div className="flex min-w-0 flex-1 flex-col gap-6 overflow-y-scroll pt-4">
        {/* Logo */}
        {/* <div className="mx-auto max-w-3xl md:mt-20"></div> */}

        {/* Description */}
        {/* <div className="min-h-[24px] min-w-[24px] shrink-0"></div> */}
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === "user" ? "User: " : "AI: "}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
                case "tool-invocation":
                  return (
                    <pre key={`${message.id}-${i}`}>
                      {JSON.stringify(part.toolInvocation, null, 2)}
                    </pre>
                  );
              }
            })}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-background mx-auto flex w-full gap-2 px-4 pb-4 md:max-w-3xl md:pb-6"
      >
        <div className="relative flex w-full flex-col gap-4">
          {/* Sample prompt */}
          <div className="grid w-full gap-2 sm:grid-cols-2">
            <div className="block">
              <Button
                variant="outline"
                className="h-auto w-full flex-1 cursor-pointer items-start justify-start gap-1 rounded-xl px-4 py-3.5 text-left disabled:pointer-events-none sm:flex-col"
              >
                <span className="font-medium">What are the advantages</span>
                <span className="text-muted-foreground">of using Next.js?</span>
              </Button>
            </div>
            <div className="block">
              <Button
                variant="outline"
                className="h-auto w-full flex-1 cursor-pointer items-start justify-start gap-1 rounded-xl px-4 py-3.5 text-left disabled:pointer-events-none sm:flex-col"
              >
                <span className="font-medium">Write code to</span>
                <span className="text-muted-foreground">
                  demonstrate djikstra's algorithm
                </span>
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button
                variant="outline"
                className="h-auto w-full flex-1 cursor-pointer items-start justify-start gap-1 rounded-xl px-4 py-3.5 text-left disabled:pointer-events-none sm:flex-col"
              >
                <span className="font-medium">Help me write an essay</span>
                <span className="text-muted-foreground">about silicon valley</span>
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button
                variant="outline"
                className="h-auto w-full flex-1 cursor-pointer items-start justify-start gap-1 rounded-xl px-4 py-3.5 text-left disabled:pointer-events-none sm:flex-col"
              >
                <span className="font-medium">What is the weather</span>
                <span className="text-muted-foreground">in San Francisco</span>
              </Button>
            </div>
          </div>

          {/* Message input */}
          <input
            type="file"
            className="pointer-events-none fixed -top-4 -left-4 size-0.5 opacity-0"
            tabIndex={-1}
            multiple
          />
          <Textarea
            ref={textAreaRef}
            value={input}
            onChange={handleInputChange}
            onInput={handleInput}
            placeholder="Send a message..."
            className="bg-muted max-h-[calc(75dvh)] min-h-[98px] resize-none overflow-hidden rounded-2xl !text-base"
            rows={2}
          ></Textarea>
          <div className="absolute bottom-0 flex w-fit flex-row justify-start p-2">
            <Button variant="ghost" className="cursor-pointer" size="icon">
              <Paperclip />
            </Button>
          </div>
          <div className="absolute right-0 bottom-0 flex w-fit flex-row justify-end p-2">
            {status !== "submitted" && status !== "streaming" && (
              <Button
                type="submit"
                variant="default"
                className="cursor-pointer rounded-full p-1.5"
                size="icon"
              >
                <Send />
              </Button>
            )}

            {(status === "submitted" || status === "streaming") && (
              <Button
                type="button"
                variant="default"
                className="cursor-pointer rounded-full p-1.5"
                size="icon"
                disabled={status === "streaming" || status === "submitted"}
              >
                <Square className="bg-white" />
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
