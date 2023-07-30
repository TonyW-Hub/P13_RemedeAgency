import React, { PropsWithChildren } from "react"
import Styles from "./Footer.module.scss"

type FooterProps = {}

export const Footer = (props: PropsWithChildren<FooterProps>) => {
  return (
    <footer className={Styles.Footer}>
      <p className={Styles.FooterText}>
        Copyright {new Date().getFullYear()} Argent Bank
      </p>
    </footer>
  )
}
