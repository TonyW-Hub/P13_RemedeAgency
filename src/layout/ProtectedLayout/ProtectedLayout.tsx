import React, { PropsWithChildren, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { ProtectedNavBar } from "../../components/NavsBar/ProtectedNavBar/ProtectedNavBar"
import { Footer } from "../../components/Footers/Footer/Footer"
import { useAppSelector } from "../../app/hooks"
import { selectUser } from "../../features/user/user"
import { APP_LINKS } from "../../utils/appLinks"

type ProtectedLayoutProps = {}

export const ProtectedLayout = (
  props: PropsWithChildren<ProtectedLayoutProps>,
) => {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.token === "") {
      navigate(APP_LINKS.public.home)
    }
  }, [user.token, navigate])

  return (
    <React.Fragment>
      <ProtectedNavBar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
