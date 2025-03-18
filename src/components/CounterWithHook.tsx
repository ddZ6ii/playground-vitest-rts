import { useCounter } from "@/hooks"

export default function Counter() {
  const { count, incrementCount, decrementCount } = useCounter()
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-lg" data-testid="count-value-2">
        {count}
      </p>
      <button
        type="button"
        className="cursor-pointer rounded-md border border-slate-100 px-2 py-1"
        onClick={() => {
          incrementCount()
        }}
      >
        Increment count
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-md border border-slate-100 px-2 py-1"
        onClick={() => {
          decrementCount()
        }}
      >
        Decrement count
      </button>
    </div>
  )
}
