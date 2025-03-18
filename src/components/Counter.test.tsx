import { beforeEach, describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Counter } from "@/components"
import { assert } from "@/tests/utils"

type TestArgs = {
  countRef: HTMLParagraphElement | null
  buttonRef: HTMLButtonElement | null
}

const testArgs: TestArgs = {
  countRef: null,
  buttonRef: null,
}

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />)
    const count = screen.getByTestId<HTMLParagraphElement>("count-value")
    const incrementButton = screen.getByRole<HTMLButtonElement>("button", {
      name: /Increment count/i,
    })
    testArgs.countRef = count
    testArgs.buttonRef = incrementButton
  })

  it("renders on screen", () => {
    const { countRef: count, buttonRef: incrementButton } = testArgs
    assert(count !== null)
    assert(incrementButton !== null)

    expect(count).toBeInTheDocument()

    expect(incrementButton).toBeInTheDocument()
  })

  it("initial value should be 0", () => {
    const count = testArgs.countRef
    assert(count !== null)

    expect(count.textContent).toBe("0")
  })

  it("increments by 1 on click", async () => {
    const { countRef: count, buttonRef: incrementButton } = testArgs
    assert(count !== null)
    assert(incrementButton !== null)
    const initialCount = Number(count.textContent)

    await userEvent.click(incrementButton)

    expect(count.textContent).toBe((initialCount + 1).toString())

    await userEvent.click(incrementButton)

    expect(count.textContent).toBe((initialCount + 2).toString())
  })
})
