import { beforeEach, describe, expect, it } from "vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { Greeting } from "@/components"
import { assert } from "@/tests/utils"

type TestArgs = {
  titleRef: HTMLHeadingElement | null
}

const testArgs: TestArgs = {
  titleRef: null,
}

describe("Greeting", () => {
  beforeEach(() => {
    render(<Greeting />)
    const title = screen.getByTestId<HTMLHeadingElement>("title")
    testArgs.titleRef = title
  })

  it("renders on screen", () => {
    const title = testArgs.titleRef
    assert(title !== null)

    expect(title).toBeInTheDocument()
  })

  it("renders with default name", () => {
    const title = testArgs.titleRef
    assert(title !== null)

    expect(title.textContent).toMatch(/Hello, World!/)
  })

  it("renders with username", () => {
    // First make sure to remove the beforeEach Greeting from virtual DOM
    cleanup()
    render(<Greeting name="John" />)
    const title = screen.getByTestId<HTMLHeadingElement>("title")

    expect(title.textContent).toMatch(/Hello, John!/)
  })
})
