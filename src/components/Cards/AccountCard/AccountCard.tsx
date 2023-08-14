import React, { PropsWithChildren } from "react"
import Styles from "./AccountCard.module.scss"
import { useNavigate } from "react-router-dom"
import { APP_LINKS } from "../../../utils/appLinks"

type AccountCardProps = {
  id: string
  showedButton?: boolean
}

export const AccountCard = ({
  id,
  showedButton = false,
}: PropsWithChildren<AccountCardProps>) => {
  const naviagte = useNavigate()

  return (
    <section
      className={Styles.AccountCard}
      style={!showedButton ? { textAlign: "center" } : {}}
    >
      <div className={Styles.AccountCardWrapper}>
        <h3 className={Styles.AccountCardTitle}>
          Argent Bank Checking (x8349)
        </h3>
        <p className={Styles.AccountCardAmount}>$2,082.79</p>
        <p className={Styles.AccountCardAmountDescription}>Available Balance</p>
      </div>
      {showedButton && (
        <div className={`${Styles.AccountCardWrapper} ${Styles.cta}`}>
          <button
            className={Styles.transactionButton}
            onClick={() => {
              naviagte(APP_LINKS.protected.transaction + "/" + id)
            }}
          >
            View transactions
          </button>
        </div>
      )}
    </section>
  )
}
