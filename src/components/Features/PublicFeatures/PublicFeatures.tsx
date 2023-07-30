import React, { PropsWithChildren } from "react"
import Styles from "./PublicFeatures.module.scss"
import { APP_IMAGES_ASSETS } from "../../../utils/appImagesAssets"

type PublicFeaturesProps = {}

export const PublicFeatures = (
  props: PropsWithChildren<PublicFeaturesProps>,
) => {
  return (
    <section className={Styles.PublicFeatures}>
      <h2 className="sr-only">Features</h2>
      <div className={Styles.PublicFeaturesItem}>
        <img
          src={APP_IMAGES_ASSETS.icon.iconChat}
          alt="Chat Icon"
          className={Styles.PublicFeaturesIcon}
        />
        <h3 className={Styles.PublicFeaturesItemTitle}>
          You are our #1 priority
        </h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className={Styles.PublicFeaturesItem}>
        <img
          src={APP_IMAGES_ASSETS.icon.iconMoney}
          alt="Chat Icon"
          className={Styles.PublicFeaturesIcon}
        />
        <h3 className={Styles.PublicFeaturesItemTitle}>
          More savings means higher rates
        </h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className={Styles.PublicFeaturesItem}>
        <img
          src={APP_IMAGES_ASSETS.icon.iconSecurity}
          alt="Chat Icon"
          className={Styles.PublicFeaturesIcon}
        />
        <h3 className={Styles.PublicFeaturesItemTitle}>
          Security you can trust
        </h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  )
}
