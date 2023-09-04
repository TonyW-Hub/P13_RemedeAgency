import React, { PropsWithChildren, useState, useEffect } from "react"
import Styles from "./ProtectedHomePage.module.scss"
import { EditNameForm } from "../../../components/Forms/EditNameForm/EditNameForm"
import { Button } from "../../../components/Buttons/Button/Button"
import { AccountCard } from "../../../components/Cards/AccountCard/AccountCard"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectUser, userProfile } from "../../../features/user/user"

type ProtectedHomePageProps = {}

export const ProtectedHomePage = (
  props: PropsWithChildren<ProtectedHomePageProps>,
) => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const [showEdit, setShowEdit] = useState(false)

  const handleClickEdit = (value: boolean) => {
    setShowEdit(value)
  }

  useEffect(() => {
    dispatch(userProfile(user?.token))
  }, [dispatch, user?.token])

  return (
    <main className={Styles.ProtectedHomePage}>
      <div className={Styles.ProtectedHomePageHeader}>
        <h1>
          Welcome back
          <br />
          {user?.profile?.firstName} {user?.profile?.lastName}!
        </h1>
        {!showEdit && (
          <Button
            onClick={() => {
              handleClickEdit(true)
            }}
          >
            Edit Name
          </Button>
        )}
      </div>

      {showEdit && <EditNameForm cancelEdit={handleClickEdit} />}

      <AccountCard id="1" showedButton />
    </main>
  )
}
