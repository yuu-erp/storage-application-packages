import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark'
  })

  // Lắng nghe sự thay đổi của localStorage để cập nhật theme trên tất cả component
  useEffect(() => {
    const handleStorageChange = () => {
      setIsDarkMode(localStorage.getItem('theme') === 'dark')
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')

    // Dispatch sự kiện để thông báo cho các component khác
    window.dispatchEvent(new Event('storage'))
  }

  return { isDarkMode, toggleTheme }
}
