import styles from '~/styles/components/CallWriteBtns.module.scss'

export default function CallWriteBtns() {
  return <>
    <div className={styles.callWriteBtnsBlock}>
      <button className={styles.callBtn}>
        <a href="tel:+79214320035">
          <img src="/img/phone-icon.svg" alt="телефон"/>
          <span>Позвонить</span>
        </a>
      </button>
      <button className={styles.whatsappBtn}>
        <a href="https://wa.me/+79214320035" target="_blank">
          <img src="/img/whatsapp-icon.svg" alt="whatsapp"/>
          <span>Написать</span>
        </a>
      </button>
    </div>
  </>
}