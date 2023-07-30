import React, { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"
import { PublicNavBar } from "../../components/NavsBar/PublicNavBar/PublicNavBar"
import { Footer } from "../../components/Footers/Footer/Footer"

type PublicLayoutProps = {}

export const PublicLayout = (props: PropsWithChildren<PublicLayoutProps>) => {
  return (
    <React.Fragment>
      <PublicNavBar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
