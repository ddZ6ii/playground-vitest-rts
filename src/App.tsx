import { Counter, CounterWithHook, Greeting, UserProfile } from "@/components"
import "./App.css"

export default function App() {
  return (
    <div className="grid min-h-screen items-center bg-slate-800 text-slate-100">
      <div className="container mx-auto grid w-fit content-start justify-center gap-4 overflow-clip rounded-lg border border-slate-100 p-8">
        <Greeting />
        <Counter />
        <UserProfile userId={1} />
        <CounterWithHook />
      </div>
    </div>
  )
}
