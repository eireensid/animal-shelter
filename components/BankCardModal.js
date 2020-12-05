import BankCard from '~/components/BankCard'
import styles from '~/styles/components/BankCardModal.module.scss'

export default function BankCardModal() {
  return <>
    <div className={styles.bankCardModalBlock}>
      <div className={styles.bankCardModal}>
        <div className={styles.bankCardModalClose}>
          <img src="/img/close.png" alt="закрыть"/>
        </div>
        <p>Просто нажмите на кнопку, и номер карты автоматически скопируется</p>
        <BankCard/>
      </div>
    </div>
  </>
}