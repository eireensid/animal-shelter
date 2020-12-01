import styles from '~/styles/components/VisitingRules.module.scss'
import CallWriteBtns from '~/components/CallWriteBtns'

export default function VisitingRules() {
  return <>
    <div className={styles.visitingRulesBlock}>
      <h2>Правила посещения приюта:</h2>
      <h3>Обязательно:</h3>
      <p>Перед тем, как привезти / отправить вещи, вам необходимо за 3-4 дня написать в What’s Up или позвонить. Мы подскажем точный адрес, 
        дни визита и ответим на все ваши вопросы.</p>
      <div className={styles.callWriteBtnsWrapper}>
        <CallWriteBtns/>
      </div>
    </div>
  </>
}