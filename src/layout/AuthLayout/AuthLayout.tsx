import React, { Suspense, useEffect } from "react"
import { useNavigate, useOutlet } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectUser, updateToken } from "../../features/user/user"
import { APP_LINKS } from "../../utils/appLinks"

type AuthLayoutProps = {}

export const AuthLayout = (props: AuthLayoutProps) => {
  const outlet = useOutlet()
  const navigate = useNavigate()
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user.token === "") {
      dispatch(updateToken())
      navigate(APP_LINKS.protected.home)
    }
  }, [user.token, navigate, dispatch])

  return <Suspense fallback={<>Loader</>}>{outlet}</Suspense>
}
