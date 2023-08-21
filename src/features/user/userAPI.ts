import { BASE_URL } from "../../utils/globalVariables"

export const userLoginApi = async (email: string, password: string) => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  return response
}
