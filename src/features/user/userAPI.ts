import { BASE_URL } from "../../utils/globalVariables"

export const userLoginApi = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (response.status === 200) {
      return response
    } else {
      throw new Error("Login failed")
    }
  } catch (error) {
    console.error("Error during login:", error)
    throw error
  }
}
