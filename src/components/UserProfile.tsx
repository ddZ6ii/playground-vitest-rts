import { useEffect, useState } from "react"
import { getUserById, User } from "@/services"

type UserProfileProps = {
  userId: number
}

export default function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(userId)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const user = (await response.json()) as User
        setUser(user)
      } catch (error) {
        let errorMessage = ""
        if (error instanceof Error) {
          errorMessage = error.message
        } else {
          errorMessage = JSON.stringify(error)
        }
        setError(errorMessage)
      }
    }
    void fetchUser()
  }, [userId])

  if (!user) return <p>Loading...</p>

  if (error)
    return (
      <div>
        <h2 className="text-lg font-semibold">An error has occured</h2>
        <p>{error}</p>
      </div>
    )

  return (
    <div>
      <h2 data-testid="user-name" className="text-lg font-semibold">
        {user.name}
      </h2>
      <p data-testid="user-email">{user.email}</p>
    </div>
  )
}
