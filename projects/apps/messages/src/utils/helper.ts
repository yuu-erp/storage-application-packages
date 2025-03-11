export const getLastSeen = (timestamp: number): string => {
  const now = Date.now()
  const elapsed = now - timestamp

  const seconds = Math.floor(elapsed / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return `Last seen ${seconds} seconds ago`
  if (minutes < 60) return `Last seen ${minutes} minutes ago`
  if (hours < 24) return `Last seen ${hours} hours ago`
  if (days === 1) return `Last seen yesterday`
  return `Last seen ${days} days ago`
}
