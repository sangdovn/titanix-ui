'use server'

import { openai } from '@ai-sdk/openai'
import { Message, streamText } from 'ai'

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    messages,
  })

  return result.toDataStreamResponse()
}
