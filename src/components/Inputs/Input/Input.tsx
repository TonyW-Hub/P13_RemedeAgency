import React, { PropsWithChildren } from "react"
import Styles from "./Input.module.scss"

type InputProps = React.HTMLProps<HTMLInputElement> & {}

export const Input = (props: PropsWithChildren<InputProps>) => {
  const { ...rest } = props

  return <input {...rest} className={Styles.Input} />
}
