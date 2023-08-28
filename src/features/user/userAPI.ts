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

export const userProfileApi = async (token: string) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
  })

  return response
}

export const updateUserProfileApi = async (
  token: string,
  body: {
    firstName: string
    lastName: string
  },
) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(body),
  })

  return response
}
