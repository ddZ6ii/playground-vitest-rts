type GreetingProps = {
  name?: string
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <h1 data-testid="title" className="text-2xl font-semibold">
      Hello, {name ?? "World"}!{" "}
    </h1>
  )
}
