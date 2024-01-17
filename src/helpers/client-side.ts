function clientSideOnly<T extends () => any>(entries: T): ReturnType<T> | undefined
function clientSideOnly<T extends () => any, U extends ReturnType<T>>(
  entries: T,
  fallback: U
): NonNullable<ReturnType<T>> | U
function clientSideOnly<T extends () => any, U extends ReturnType<T>>(entries: T, fallback?: U) {
  const canUseWindowOrDOM = typeof window === 'object' && window !== null && 'document' in window

  if (canUseWindowOrDOM) {
    return entries()
  }

  return fallback
}

export { clientSideOnly }
