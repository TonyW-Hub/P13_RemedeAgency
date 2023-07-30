import React, { Suspense } from "react"
import { Await, useLoaderData, useOutlet } from "react-router-dom"

type AuthLayoutProps = {}

export const AuthLayout = (props: AuthLayoutProps) => {
  const outlet = useOutlet()

  // const { userPromise } = useLoaderData() as {
  //   userPromise: Promise<null | object>
  // }

  return (
    <Suspense fallback={<>Loader</>}>
      {/* <Await
        resolve={userPromise}
        errorElement={<>Error</>}
        children={(user) => ({ outlet })}
      /> */}
      {outlet}
    </Suspense>
  )
}
