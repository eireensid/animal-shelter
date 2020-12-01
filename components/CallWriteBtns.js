import styles from '~/styles/components/CallWriteBtns.module.scss'

export default function CallWriteBtns() {
  return <>
    <div className={styles.callWriteBtnsBlock}>
      <button className={styles.callBtn}>
        <img src="/img/phone-icon.svg" alt="телефон"/>
        <span>Позвонить</span>
      </button>
      <button className={styles.whatsappBtn}>
        <img src="/img/whatsapp-icon.svg" alt="whatsapp"/>
        <span>Написать</span>
      </button>
    </div>
  </>
}