import React, { PropsWithChildren } from "react"
import Styles from "./RaceLoader.module.scss"

type RaceLoaderProps = {
  absolute?: boolean
  className?: string
}

export const RaceLoader = ({
  absolute = false,
  className,
  children,
}: PropsWithChildren<RaceLoaderProps>) => {
  const setProps = () => {
    const classProps = className ? className : ""
    const loaderAbsolute = absolute ? Styles.absolute : ""

    return [Styles.container, classProps, loaderAbsolute].join(" ")
  }

  return (
    <div className={setProps()}>
      <div className={Styles.RaceLoader}></div>
      {children && <p style={{ marginTop: 5 }}>{children}</p>}
    </div>
  )
}
