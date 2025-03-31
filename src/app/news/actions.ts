'use server'

import { fetcher } from '@/lib/utils'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export async function fetchTop10Stories() {
  const topStoryIds = await fetchTopStoryIds()
  const stories = await Promise.all(topStoryIds.map(async (id: string) => await fetchStory(id)))
  const filteredStories = stories.filter((story) => !story.deleted && !story.dead && story.url)
  filteredStories.sort((a, b) => b.time - a.time).sort((a, b) => b.score - a.score)
  return filteredStories.slice(0, 10)
}

export async function fetchTopStoryIds() {
  return await fetcher(`${BASE_URL}/topstories.json`)
}

export async function fetchStory(storyId: string) {
  return await fetcher(`${BASE_URL}/item/${storyId}.json`)
}
