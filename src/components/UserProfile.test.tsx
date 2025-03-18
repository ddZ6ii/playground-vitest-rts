import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import { UserProfile } from "@/components"
import { getUserById, User } from "@/services"
import { assert } from "@/tests/utils"

type TestArgs = {
  user: User
  mock: Mock | null
}

const testArgs: TestArgs = {
  user: {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  mock: null,
}

describe("UserProfile", () => {
  // Mock (create a "fake" version) of the fetch function. It does not fire a network request but instead gives us manual control over that should be returned.
  beforeEach(() => {
    const mockFetch = vi.fn().mockImplementation(getUserById)
    testArgs.mock = mockFetch
  })

  // ⚠️ Always remember to clear (or restore) mocks before or after each test run to undo mock state changes between runs!
  afterEach(() => {
    vi.resetAllMocks()
  })

  it("fetches and displays user data on screen", async () => {
    const { mock: mockFetch, user } = testArgs
    assert(mockFetch !== null)

    // Mock the expected result from calling the fetch function.
    mockFetch.mockResolvedValueOnce({
      json: () => ({ user }),
    })
    render(<UserProfile userId={user.id} />)

    // At this point, the user is still null (loading...) until the fetch is done and the state is populated.
    const loader = screen.getByText<HTMLParagraphElement>(/Loading/i)
    expect(loader).toBeInTheDocument()
    screen.debug()

    // Wait until the mocked fetch is done executing (keep running the following assertions until they pass or a timeout occurs),
    await waitFor(() => {
      const userName = screen.getByTestId("user-name")
      const userEmail = screen.getByTestId("user-name")
      expect(userName).toBeInTheDocument()
      expect(userEmail).toBeInTheDocument()
      screen.debug()
    })
  })
})
