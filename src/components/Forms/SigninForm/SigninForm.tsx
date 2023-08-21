import React, { PropsWithChildren, useState, useEffect } from "react"
import Styles from "./SigninForm.module.scss"
import {
  selectUser,
  userLogin,
  selectUserFetch,
} from "../../../features/user/user"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { LOCAL_STORAGE_KEYS } from "../../../utils/localStorageKeys"
import { useNavigate } from "react-router-dom"
import { APP_LINKS } from "../../../utils/appLinks"

type SigninFormProps = {}

export const SigninForm = (props: PropsWithChildren<SigninFormProps>) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const userFetch = useAppSelector(selectUserFetch)
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (
      user.token !== "" ||
      localStorage.getItem(LOCAL_STORAGE_KEYS.user.token)
    ) {
      navigate(APP_LINKS.protected.home)
    }
  }, [user, navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "" || password === "") return

    dispatch(userLogin(username, password))
  }

  return (
    <form
      className={Styles.SigninForm}
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <div className={Styles.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setUsername(e.currentTarget.value)
          }}
        />
      </div>
      <div className={Styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value)
          }}
        />
      </div>
      <div className={Styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button
        className={Styles.SigninFormButton}
        disabled={userFetch === "loading"}
      >
        Sign In
      </button>

      {userFetch === "failed" && <p>{user.errorMessage}</p>}
    </form>
  )
}
