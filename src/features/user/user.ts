import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface UserSate {
  user: object
  status: "idle" | "loading" | "failed"
}

const initialState: UserSate = {
  user: {},
  status: "idle",
}

export const getUser = createAsyncThunk("user/fetch", async () => {
  const res = await fetch("http://localhost:3001/profile")

  return res
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
