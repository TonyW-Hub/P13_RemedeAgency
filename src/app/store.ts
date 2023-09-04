import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit"
import userReducer from "../features/user/user"

import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
  }),
)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store)

export { store, persistor }

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
