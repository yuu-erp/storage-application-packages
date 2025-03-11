import { useCallback, useRef, useState } from 'react'

const useDrag = (initialX: number, initialY: number) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const dragRef = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const getEventCoordinates = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    return { x: e.clientX, y: e.clientY }
  }

  const onStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault() // Chặn ghost image khi kéo

    if (!dragRef.current) return

    isDragging.current = true
    const rect = dragRef.current.getBoundingClientRect()
    const { x, y } = getEventCoordinates(e.nativeEvent)

    offset.current = {
      x: x - rect.right,
      y: y - rect.bottom
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onEnd)
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('touchend', onEnd)
  }, [])

  const onMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return
    e.preventDefault()

    const { x, y } = getEventCoordinates(e)

    // Sử dụng requestAnimationFrame để giảm giật lag
    requestAnimationFrame(() => {
      setPosition({
        x: window.innerWidth - x + offset.current.x,
        y: window.innerHeight - y + offset.current.y
      })
    })
  }, [])

  const onEnd = useCallback(() => {
    isDragging.current = false //Reset đúng cách để không bị dính chuột
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onEnd)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onEnd)
  }, [])

  return { dragRef, position, onStart, setPosition }
}

export default useDrag
