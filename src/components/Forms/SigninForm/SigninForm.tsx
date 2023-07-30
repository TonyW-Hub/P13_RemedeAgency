import React, { PropsWithChildren } from "react"
import Styles from "./SigninForm.module.scss"

type SigninFormProps = {}

export const SigninForm = (props: PropsWithChildren<SigninFormProps>) => {
  return (
    <form className={Styles.SigninForm}>
      <div className={Styles.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={Styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className={Styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className={Styles.SigninFormButton}>Sign In</button>
    </form>
  )
}
