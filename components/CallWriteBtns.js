import styles from '~/styles/components/CallWriteBtns.module.scss'

export default function CallWriteBtns() {
  const whatsappClick = () => {
    window.open('https://wa.me/+79214320035', '_blank')
  }
  const callClick = () => {
    window.location.href = 'tel:+79214320035'
  }

  return <>
    <div className={styles.callWriteBtnsBlock}>
      <button onClick={callClick} className={styles.callBtn}>        
        <img src="/img/phone-icon.svg" alt="телефон"/>
        <span>Позвонить</span>         
      </button>
      <button onClick={whatsappClick} className={styles.whatsappBtn}>       
        <img src="/img/whatsapp-icon.svg" alt="whatsapp"/>
        <span>Написать</span>      
      </button>
    </div>
  </>
}