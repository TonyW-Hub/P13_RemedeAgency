import React, { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"
import { ProtectedNavBar } from "../../components/NavsBar/ProtectedNavBar/ProtectedNavBar"
import { Footer } from "../../components/Footers/Footer/Footer"

type ProtectedLayoutProps = {}

export const ProtectedLayout = (
  props: PropsWithChildren<ProtectedLayoutProps>,
) => {
  return (
    <React.Fragment>
      <ProtectedNavBar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
