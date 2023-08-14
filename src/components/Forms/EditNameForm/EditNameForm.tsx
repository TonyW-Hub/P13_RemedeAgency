import React, { PropsWithChildren } from "react"
import Styles from "./EditNameForm.module.scss"
import { Input } from "../../Inputs/Input/Input"
import { Button } from "../../Buttons/Button/Button"

type EditNameFormProps = {
  cancelEdit: (value: boolean) => void
}

export const EditNameForm = ({
  cancelEdit,
}: PropsWithChildren<EditNameFormProps>) => {
  return (
    <form className={Styles.EditNameForm}>
      <div className={Styles.group}>
        <Input type="text" placeholder="Tony" />
        <Input type="text" placeholder="Jarvis" />
      </div>

      <div className={Styles.group}>
        <Button minWidth={100} variant="bordered">
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
