export type User = {
  id: number
  name: string
  email: string
}

export const getUserById = (userId: number) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${userId.toString()}`,
  )
}
