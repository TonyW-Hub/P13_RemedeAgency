import React, { PropsWithChildren } from "react"
import Styles from "./ProtectedNavBar.module.scss"
import { Link } from "react-router-dom"
import { APP_LINKS } from "../../../utils/appLinks"
import { APP_IMAGES_ASSETS } from "../../../utils/appImagesAssets"

type ProtectedNavBarProps = {}

export const ProtectedNavBar = (
  props: PropsWithChildren<ProtectedNavBarProps>,
) => {
  return (
    <nav className={Styles.ProtectedNavBar}>
      <Link to={APP_LINKS.protected.home}>
        <img
          className={Styles.ProtectedNavBarLogoImage}
          src={APP_IMAGES_ASSETS.logo.argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link
          className={Styles.ProtectedNavBarItem}
          to={APP_LINKS.protected.home}
        >
          <i className="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link className={Styles.ProtectedNavBarItem} to={APP_LINKS.public.home}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  )
}
