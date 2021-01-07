import styles from '~/styles/components/BankCard.module.scss'

export default function BankCard() {

const copyText = () => {
  navigator.clipboard.writeText("5469 5500 6217 8147")
}

  return <>
    <div className={styles.donationBlock}>
      
      <div className={styles.bankCardWrapper}>
        <div className={styles.bankCard}>
          <div className={styles.bankCardNumber}>
            <img src="/img/banking-card-icon.png" alt="банковская карта для пожертвований"/>
            5469 5500 6217 8147
          </div>
          <div className={styles.bankCardBtn}>
            <button className={styles.btnTextDesktop} onClick={copyText}>Скопировать номер</button>
            <button className={styles.btnTextMobile} onClick={copyText}>Скопировать</button>
          </div>
        </div>
      </div>
    </div>
  </>
}