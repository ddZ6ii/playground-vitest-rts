import { describe, expect, it } from "vitest"
import { act, renderHook } from "@testing-library/react"
import useCounter from "@/hooks/useCounter"

describe("useCounter", () => {
  it("has initial value of 0", () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)
  })

  it("increments by 1", () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)
    // Make sure to perform the state update prior to making assertions.
    act(() => {
      result.current.incrementCount()
    })
    expect(result.current.count).toBe(1)
  })

  it("decrements by 3", () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)
    // Make sure to perform the state update prior to making assertions.
    act(() => {
      result.current.decrementCount(3)
    })
    expect(result.current.count).toBe(-3)
  })
})
