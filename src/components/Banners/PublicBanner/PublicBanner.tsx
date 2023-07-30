import React, { PropsWithChildren } from "react"
import Styles from "./PublicBanner.module.scss"

type PublicBannerProps = {}

export const PublicBanner = (props: PropsWithChildren<PublicBannerProps>) => {
  return (
    <div className={Styles.PublicBanner}>
      <section className={Styles.PublicBannerContent}>
        <h2 className="sr-only">Promoted Content</h2>
        <p className={Styles.subtitles}>No fees.</p>
        <p className={Styles.subtitles}>No minimum deposit.</p>
        <p className={Styles.subtitles}>High interest rates.</p>
        <p className={Styles.text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  )
}
