import styles from '~/styles/components/BankCard.module.scss'

export default function BankCard() {
  return <>
    <div className={styles.donationBlock}>
      <h2>Для пожертвований:</h2>
      <div className={styles.bankCardWrapper}>
        <div className={styles.bankCard}>
          <div className={styles.bankCardNumber}>
            <img src="/img/banking-card-icon.png" alt="банковская карта для пожертвований"/>
            <span>5469 5500 6217 8147</span>
          </div>
          <div className={styles.bankCardBtn}>
            <button>Скопировать номер</button>
          </div>
        </div>
      </div>
    </div>
  </>
}