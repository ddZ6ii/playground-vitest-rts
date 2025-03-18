import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-lg" data-testid="count-value">
        {count}
      </p>
      <button
        type="button"
        className="cursor-pointer rounded-md border border-slate-100 px-2 py-1"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment count
      </button>
    </div>
  )
}
