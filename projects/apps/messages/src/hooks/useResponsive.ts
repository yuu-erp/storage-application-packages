import { useEffect, useLayoutEffect, useState } from 'react'

const breakpoints: Record<string, number> = {
  xs: 425,
  sm: 640,
  md: 988,
  lg: 1078
}

export default function useResponsive(
  query: 'up' | 'down' | 'between' | 'only' = 'up',
  start: keyof typeof breakpoints = 'sm',
  end?: keyof typeof breakpoints
) {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      let isMatch = false

      if (query === 'up') {
        isMatch = window.innerWidth >= breakpoints[start]
      } else if (query === 'down') {
        isMatch = window.innerWidth < breakpoints[start]
      } else if (query === 'between') {
        isMatch = window.innerWidth >= breakpoints[start] && window.innerWidth <= breakpoints[end!]
      } else if (query === 'only') {
        isMatch =
          window.innerWidth >= breakpoints[start] && (!end || window.innerWidth < breakpoints[end])
      }

      setMatches(isMatch)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [query, start, end])

  return matches
}

export function useWidth() {
  const getWidth = () => {
    let matchedBreakpoint: keyof typeof breakpoints = 'xs' // Mặc định là 'xs'

    for (const [key, value] of Object.entries(breakpoints)) {
      if (window.innerWidth >= value) {
        matchedBreakpoint = key as keyof typeof breakpoints
      }
    }

    return matchedBreakpoint
  }

  const [width, setWidth] = useState<keyof typeof breakpoints>(getWidth)

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(getWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}
