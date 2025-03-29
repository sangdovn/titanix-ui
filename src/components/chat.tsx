'use client'

import { useChat } from '@ai-sdk/react'
import { ChatHeader } from './chat-header'
import { ChatInput } from './chat-input'
import { ChatMessages } from './chat-messages'

export const Chat = () => {
  const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat({
    api: '/chat/api',
  })

  const resetChat = () => {
    setMessages([])
  }

  return (
    <div className="flex h-dvh flex-col">
      {/* header */}
      <ChatHeader newChat={resetChat} />

      {/* message */}
      <ChatMessages messages={messages} />

      {/* input */}
      <ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  )
}
