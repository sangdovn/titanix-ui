import { useScrollToBottom } from '@/hooks/use-scroll-to-bottom'
import { UIMessage } from 'ai'
import { ChatMessage } from './chat-message'

export const ChatMessages = ({ messages }: { messages: UIMessage[] }) => {
  const [containerRef, endRef] = useScrollToBottom<HTMLDivElement>()

  return (
    <div
      ref={containerRef}
      className="group/message custom-scrollbar flex grow flex-col gap-4 overflow-x-hidden overflow-y-auto p-4"
    >
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}

      <div ref={endRef} className="min-h-6 min-w-6 shrink-0"></div>
    </div>
  )
}
