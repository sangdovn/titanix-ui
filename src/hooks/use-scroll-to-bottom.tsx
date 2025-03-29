import { type RefObject, useEffect, useRef } from 'react'

export const useScrollToBottom = <T extends HTMLElement>(): [
  RefObject<T | null>,
  RefObject<T | null>,
] => {
  const containerRef = useRef<T>(null)
  const endRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    const end = endRef.current

    const scrollToBottom = () => {
      if (container && end) {
        end.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }
    }

    if (container) {
      const mutationObserver = new MutationObserver(() => {
        scrollToBottom()
      })

      mutationObserver.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      })

      scrollToBottom()

      return () => mutationObserver.disconnect()
    }
  }, [])

  return [containerRef, endRef]
}
