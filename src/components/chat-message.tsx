'use client'
// import { UIMessage } from 'ai'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

export const ChatMessage = ({ message }: { message: { role: string; content: string } }) => {
  return (
    <motion.div
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="group/message mx-auto w-full max-w-3xl"
      data-role={message.role}
    >
      <div
        className={cn(
          'flex flex-row items-center gap-2 rounded-xl px-3 py-2',
          message.role === 'user' && 'bg-primary text-primary-foreground ml-auto w-fit max-w-2xl',
        )}
      >
        {message.role === 'assistant' && (
          <div className="ring-border bg-background flex size-8 shrink-0 items-center justify-center rounded-full ring-1">
            <div className="translate-y-px">
              <Sparkles size={14} />
            </div>
          </div>
        )}
        {message.content}
      </div>
    </motion.div>
  )
}
