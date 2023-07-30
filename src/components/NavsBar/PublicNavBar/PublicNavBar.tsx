import React, { PropsWithChildren } from "react"
import Styles from "./PublicNavBar.module.scss"
import { Link } from "react-router-dom"
import { APP_LINKS } from "../../../utils/appLinks"
import { APP_IMAGES_ASSETS } from "../../../utils/appImagesAssets"

type PublicNavBarProps = {}

export const PublicNavBar = (props: PropsWithChildren<PublicNavBarProps>) => {
  return (
    <nav className={Styles.PublicNavBar}>
      <Link className={Styles.PublicNavBarLogo} to={APP_LINKS.public.home}>
        <img
          className={Styles.PublicNavBarLogoImage}
          src={APP_IMAGES_ASSETS.logo.argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className={Styles.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        <Link className={Styles.PublicNavBarItem} to={APP_LINKS.public.signin}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}
