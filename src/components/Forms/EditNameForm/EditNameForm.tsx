import React, { PropsWithChildren, useReducer } from "react"
import Styles from "./EditNameForm.module.scss"
import { Input } from "../../Inputs/Input/Input"
import { Button } from "../../Buttons/Button/Button"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectUser, updateUserProfile } from "../../../features/user/user"

type EditNameFormProps = {
  cancelEdit: (value: boolean) => void
}

type FormData = {
  firstName: string
  lastName: string
}

export const EditNameForm = ({
  cancelEdit,
}: PropsWithChildren<EditNameFormProps>) => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const reducer = (prev: FormData, next: Partial<FormData>) => ({
    ...prev,
    ...next,
  })

  const [fields, updateFields] = useReducer(reducer, {
    firstName: "",
    lastName: "",
  } as FormData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (fields.firstName === "" || fields.lastName === "") return

    dispatch(updateUserProfile(fields))

    cancelEdit(false)
  }

  return (
    <form className={Styles.EditNameForm}>
      <div className={Styles.group}>
        <Input
          type="text"
          placeholder={user?.profile?.firstName || "Tony"}
          onChange={(e) => {
            updateFields({ firstName: e.currentTarget.value })
          }}
        />
        <Input
          type="text"
          placeholder={user?.profile?.lastName || "Stark"}
          onChange={(e) => {
            updateFields({ lastName: e.currentTarget.value })
          }}
        />
      </div>

      <div className={Styles.group}>
        <Button
          minWidth={100}
          variant="bordered"
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          Save
        </Button>
        <Button
          variant="bordered"
          type="button"
          minWidth={100}
          onClick={() => {
            cancelEdit(false)
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
