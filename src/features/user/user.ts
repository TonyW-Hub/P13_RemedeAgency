import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../../app/store"
import { updateUserProfileApi, userLoginApi, userProfileApi } from "./userAPI"
import { LOCAL_STORAGE_KEYS } from "../../utils/localStorageKeys"

export interface UserSate {
  profile: {
    email: string
    firstName: string
    lastName: string
    createdAt: string
    updateAt: string
    id: string
  }
  token: string
  status: "idle" | "loading" | "failed"
  errorMessage: string
}

const initialState: UserSate = {
  profile: {
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updateAt: "",
    id: "",
  },
  token: "",
  status: "idle",
  errorMessage: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setFetching: (
      state,
      action: PayloadAction<"loading" | "idle" | "failed">,
    ) => {
      state.status = action.payload
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
  },
})

export const { setUser, setUserToken, setFetching, setErrorMessage } =
  userSlice.actions

export const userLogin =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setFetching("loading"))
      const response = await userLoginApi(email, password)

      const data = await response?.json()

      const token = data?.body?.token

      if (token) {
        dispatch(successLogIn(token))

        try {
          const resProfile = await userProfileApi(token)
          const profile = await resProfile.json()

          if (profile?.body) {
            dispatch(setUser(profile?.body))
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        if (data?.message) {
          dispatch(setErrorMessage(data.message))
        }
        dispatch(setFetching("failed"))
        localStorage.removeItem(LOCAL_STORAGE_KEYS.user.token)
      }
    } catch (error) {
      dispatch(setErrorMessage("networkError"))
      dispatch(setFetching("failed"))
      localStorage.removeItem(LOCAL_STORAGE_KEYS.user.token)
    }
  }

export const successLogIn =
  (token: string): AppThunk =>
  (dispatch) => {
    dispatch(setFetching("idle"))
    dispatch(setErrorMessage(""))
    dispatch(setUserToken(token))
    localStorage.setItem(LOCAL_STORAGE_KEYS.user.token, token)
  }

export const userProfile =
  (token: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const resProfile = await userProfileApi(
        token ? token : getState().user.token,
      )
      const profile = await resProfile.json()

      if (profile?.body) {
        dispatch(setUser(profile?.body))
      }
    } catch (error) {
      console.error(error)
    }
  }

export const updateUserProfile =
  (update: { firstName: string; lastName: string }): AppThunk =>
  async (dispatch, getState) => {
    try {
      const token = getState().user.token

      const response = await updateUserProfileApi(token, update)

      const profile = await response.json()

      console.log(profile)
    } catch (error) {
      console.log(error)
      dispatch(setErrorMessage("Fail to update user profile"))
    }
  }

export const userSignOut = (): AppThunk => (dispatch) => {
  dispatch(setUserToken(""))
  localStorage.removeItem(LOCAL_STORAGE_KEYS.user.token)
}

export const updateToken = (): AppThunk => (dispatch) => {
  const storedToken = localStorage.getItem(LOCAL_STORAGE_KEYS.user.token)
  if (storedToken && storedToken !== "") {
    dispatch(setUserToken(storedToken))
  }
}

export const selectUser = (state: RootState) => state.user

export const selectUserFetch = (state: RootState) => state.user.status

export default userSlice.reducer
