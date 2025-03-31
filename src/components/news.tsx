'use client'

import { fetchTop10Stories } from '@/app/news/actions'
import { Story } from '@/app/news/types'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import useSWR from 'swr'

export function News() {
  const { data: stories, isLoading } = useSWR('stories', fetchTop10Stories)
  return (
    <>
      {isLoading && <Loader2 className="animate-spin" />}
      <h1>News</h1>
      <div className="flex w-full flex-col items-start justify-center gap-2 p-2">
        {stories?.map((story: Story) => (
          <div key={story.id} className="flex w-full flex-row items-center justify-between gap-4">
            <span className="min-w-16">{story.score}</span>
            <Link href={story.url} className="grow text-left underline">
              {story.title}
            </Link>
            <span className="min-w-16">{story.descendants}</span>
            <span>{story.time}</span>
          </div>
        ))}
      </div>
    </>
  )
}
