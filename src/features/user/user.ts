import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../../app/store"
import { userLoginApi } from "./userAPI"
import { LOCAL_STORAGE_KEYS } from "../../utils/localStorageKeys"

export interface UserSate {
  user: object
  token: string
  status: "idle" | "loading" | "failed"
}

const initialState: UserSate = {
  user: {},
  token: "",
  status: "idle",
}

export const getUser = createAsyncThunk("user/fetch", async () => {
  const res = await fetch("http://localhost:3001/profile")

  return res
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setFetchingError: (
      state,
      action: PayloadAction<"loading" | "idle" | "failed">,
    ) => {
      state.status = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle"
        state.user = action.payload
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { setUser, setUserToken, setFetchingError } = userSlice.actions

export const userLogin =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    const response = await userLoginApi(email, password)

    const data = await response.json()

    const token = data?.body?.token

    if (token) {
      dispatch(setUser({ email, password }))
      dispatch(setUserToken(token))
      localStorage.setItem(LOCAL_STORAGE_KEYS.user.token, token)
    } else {
      dispatch(setFetchingError("failed"))
      localStorage.removeItem(LOCAL_STORAGE_KEYS.user.token)
    }
  }

export const userSignOut = (): AppThunk => (dispatch) => {
  dispatch(setUserToken(""))
  localStorage.removeItem(LOCAL_STORAGE_KEYS.user.token)
}

export const selectUser = (state: RootState) => state.user

export const selectUserError = (state: RootState) => {
  if (state.user.status === "failed") return true
  else return false
}

export default userSlice.reducer
