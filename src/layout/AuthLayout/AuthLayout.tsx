import React, { Suspense, useEffect } from "react"
import { useNavigate, useOutlet } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectUser } from "../../features/user/user"
import { LOCAL_STORAGE_KEYS } from "../../utils/localStorageKeys"
import { APP_LINKS } from "../../utils/appLinks"

type AuthLayoutProps = {}

export const AuthLayout = (props: AuthLayoutProps) => {
  const outlet = useOutlet()
  const navigate = useNavigate()
  const user = useAppSelector(selectUser)

  useEffect(() => {
    if (
      user.token === "" &&
      !localStorage.getItem(LOCAL_STORAGE_KEYS.user.token)
    ) {
      navigate(APP_LINKS.public.home)
    } else {
      navigate(APP_LINKS.protected.home)
    }
  }, [user, navigate])

  return <Suspense fallback={<>Loader</>}>{outlet}</Suspense>
}
