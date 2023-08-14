import React, { PropsWithChildren } from "react"
import Styles from "./Button.module.scss"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { minWidth?: number; variant?: "bordered" }

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { minWidth, variant, children, ...rest } = props

  const setProps = () => {
    let setVariant
    switch (variant) {
      case "bordered":
        setVariant = Styles.bordered
        break

      default:
        break
    }

    return [Styles.Button, setVariant].join(" ")
  }

  return (
    <button
      {...rest}
      className={setProps()}
      style={{ minWidth: minWidth ? minWidth : 0 }}
    >
      {children}
    </button>
  )
}
