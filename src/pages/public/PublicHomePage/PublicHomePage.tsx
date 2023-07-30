import React, { PropsWithChildren } from "react"
import Styles from "./PublicHomePage.module.scss"
import { PublicBanner } from "../../../components/Banners/PublicBanner/PublicBanner"
import { PublicFeatures } from "../../../components/Features/PublicFeatures/PublicFeatures"

type PublicHomePageProps = {}

export const PublicHomePage = (
  props: PropsWithChildren<PublicHomePageProps>,
) => {
  return (
    <main className={Styles.PublicHomePage}>
      <PublicBanner />
      <PublicFeatures />
    </main>
  )
}
