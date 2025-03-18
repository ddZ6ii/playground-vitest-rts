import { useCallback, useState } from "react"

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const incrementCount = useCallback((by = 1) => {
    setCount((prevCount) => prevCount + by)
  }, [])

  const decrementCount = useCallback((by = 1) => {
    setCount((prevCount) => prevCount - by)
  }, [])

  return { count, incrementCount, decrementCount }
}
