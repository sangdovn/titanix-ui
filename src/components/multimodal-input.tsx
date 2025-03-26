"use client";

import { Textarea } from "@/components/ui/textarea";
import { UseChatHelpers } from "@ai-sdk/react";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

function PureMultimodalInput({
  handleSubmit,
  input,
  setInput,
  status,
}: {
  handleSubmit: UseChatHelpers["handleSubmit"];
  input: UseChatHelpers["input"];
  setInput: UseChatHelpers["setInput"];
  status: UseChatHelpers["status"];
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { width } = useWindowSize();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line
      handleSubmit();
    }
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset to default
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  };

  const resetHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset to default
      textareaRef.current.style.height = "98px"; // Set new height
    }
  };

  const setFocus = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, [input]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    adjustHeight();
  };

  const submitForm = useCallback(() => {
    handleSubmit();
    resetHeight();

    if (width && width < 768) {
      setFocus();
    }
  }, [handleSubmit]);

  return (
    <form
      onSubmit={submitForm}
      className="mx-auto flex w-full px-4 pb-4 md:max-w-3xl md:pb-6"
    >
      <div className="relative w-full" onSubmit={handleSubmit}>
        <Textarea
          ref={textareaRef}
          rows={2}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          className="bg-muted max-h-[calc(75dvh)] min-h-[98px] resize-none overflow-y-auto rounded-2xl px-3 py-2 !text-base focus-visible:ring-0"
          style={{ scrollbarWidth: "thin" }}
        />
      </div>
    </form>
  );
}

export const MultimodalInput = memo(PureMultimodalInput, (prevProps, nextProps) => {
  if (prevProps.input !== nextProps.input) return false;
  if (prevProps.status !== nextProps.input) return false;
  return true;
});
