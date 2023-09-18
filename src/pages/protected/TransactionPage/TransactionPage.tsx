import React, { PropsWithChildren } from "react"
import Styles from "./TransactionPage.module.scss"
import { AccountCard } from "../../../components/Cards/AccountCard/AccountCard"
import { TransactionTableRow } from "../../../components/Tables/TransactionTableRow/TransactionTableRow"

type TransactionPageProps = {}

export const TransactionPage = (
  props: PropsWithChildren<TransactionPageProps>,
) => {
  return (
    <main className={Styles.TransactionPage}>
      <AccountCard id="1" />

      <table>
        <thead>
          <tr>
            <td></td>
            <td>date</td>
            <td>description</td>
            <td>amount</td>
            <td>balance</td>
          </tr>
        </thead>
        <tbody>
          <TransactionTableRow
            date="June 20th, 2020"
            description="Golden Sun Bakery"
            amount="5.00"
            balance="2082.79"
          />
          <TransactionTableRow
            date="June 20th, 2020"
            description="Golden Sun Bakery"
            amount="10.00"
            balance="2087.79"
          />
          <TransactionTableRow
            date="June 20th, 2020"
            description="Golden Sun Bakery"
            amount="20.00"
            balance="2097.79"
          />
        </tbody>
      </table>
    </main>
  )
}
