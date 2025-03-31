import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetcher(url: string) {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`)
  }

  return await res.json()
}
