import React, { PropsWithChildren } from "react"
import Styles from "./SigninPage.module.scss"
import { SigninForm } from "../../../components/Forms/SigninForm/SigninForm"

type SigninPageProps = {}

export const SigninPage = (props: PropsWithChildren<SigninPageProps>) => {
  return (
    <main className={Styles.SigninPage}>
      <section className={Styles.SigninPageContent}>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SigninForm />
      </section>
    </main>
  )
}
