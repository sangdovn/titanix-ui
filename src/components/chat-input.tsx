import { UseChatHelpers } from '@ai-sdk/react'
import { ArrowUp, Paperclip } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

export const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
}: {
  input: UseChatHelpers['input']
  handleInputChange: UseChatHelpers['handleInputChange']
  handleSubmit: UseChatHelpers['handleSubmit']
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault()
      submitForm(e)
    }
  }

  useEffect(() => {
    adjustHeight()
    focus()
  }, [input])

  const focus = () => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 1}px`
    }
  }

  const resetHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = '0px'
    }
  }

  const submitForm = (e: React.FormEvent | React.KeyboardEvent) => {
    handleSubmit(e)
    resetHeight()
    focus()
  }

  return (
    <form className="w-full pb-4 md:pb-6" onSubmit={submitForm}>
      <div className="bg-muted mx-auto flex max-w-3xl flex-col rounded-3xl p-2">
        <Textarea
          ref={textareaRef}
          className="custom-textarea custom-scrollbar max-h-[calc(50dvh)] min-h-0 resize-none overflow-x-hidden overflow-y-auto !text-base"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
        />

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-5" />
            </Button>
          </div>
          <div>
            <Button type="submit" size="icon" className="cursor-pointer rounded-full">
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
