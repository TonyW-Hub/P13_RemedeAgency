import React, { PropsWithChildren, useState } from "react"
import Styles from "./TransactionTableRow.module.scss"
import { EditSVG } from "../../Images/EditSVG/EditSVG"

type TransactionTableRowProps = {
  date?: string
  description?: string
  amount?: string
  balance?: string
  colSpan?: number
}

export const TransactionTableRow = ({
  date,
  description,
  amount,
  balance,
  colSpan = 5,
}: PropsWithChildren<TransactionTableRowProps>) => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => {
    setActive((prev) => !prev)
  }

  return (
    <>
      <tr className={Styles.TransactionTableRow}>
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#12002b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={active ? Styles.toggle : ""}
            onClick={() => {
              handleClick()
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </td>
        <td>{date}</td>
        <td>{description}</td>
        <td>${amount}</td>
        <td>${balance}</td>
      </tr>
      {active && (
        <>
          <tr className={Styles.active}>
            <td colSpan={colSpan}>Transaction Type: Electronic</td>
          </tr>
          <tr className={Styles.active}>
            <td colSpan={colSpan}>
              Category: Food <EditSVG />
            </td>
          </tr>
          <tr className={Styles.active}>
            <td colSpan={colSpan}>
              Notes <EditSVG />
            </td>
          </tr>
        </>
      )}
    </>
  )
}
