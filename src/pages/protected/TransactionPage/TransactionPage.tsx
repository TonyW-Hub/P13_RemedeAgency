import React, { PropsWithChildren } from "react"
import Styles from "./TransactionPage.module.scss"
import { AccountCard } from "../../../components/Cards/AccountCard/AccountCard"
import { APP_IMAGES_ASSETS } from "../../../utils/appImagesAssets"

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
          <tr>
            <td>
              {/* <img src={APP_IMAGES_ASSETS.icon.chevron} alt="Icon chevron" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </td>
            <td>June 20th, 2020</td>
            <td>Golden Sun Bakery</td>
            <td>$5.00</td>
            <td>$2800.00</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
