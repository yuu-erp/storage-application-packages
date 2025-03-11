import { useEffect, useRef } from 'react'

interface InfiniteScrollOptions {
  fetchMore: () => void // Hàm để tải thêm dữ liệu
  hasMore: boolean // Còn dữ liệu để tải không?
  threshold?: number // Ngưỡng kích hoạt (mặc định 0.5)
  root?: HTMLElement | null // Container cuộn
}

export function useInfiniteScroll({
  fetchMore,
  hasMore,
  threshold = 0.5,
  root = null
}: InfiniteScrollOptions) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!hasMore || !triggerRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMore()
        }
      },
      { root, threshold }
    )

    observerRef.current.observe(triggerRef.current)

    return () => {
      if (observerRef.current && triggerRef.current) {
        observerRef.current.unobserve(triggerRef.current)
      }
    }
  }, [fetchMore, hasMore, root, threshold])

  return { triggerRef }
}
