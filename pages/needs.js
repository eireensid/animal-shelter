import Router from 'next/router'
import {MainLayout} from '../components/MainLayout'
import styles from '~/styles/needs.module.scss'

export default function About(title='Основные нужды приюта') {
  return <MainLayout>
    <section>
      <div className={styles.needsBlock}>
        <div className={styles.breadCrumbs}>
          <span>Главная</span><span> / </span><span>Нужды приюта</span>
        </div>
        <div className={styles.needsWrapper}>
          <div>
            <h2>Основные нужды Теремка</h2>
            <p>Животные постоянно нуждаются в средствах по уходу, кормах, лекарствах и других необходимых вещах, которые вы можете самостоятельно принести 
              или отправить в помощь приюту. На этой странице вы найдете список вещей, в которых постоянно нуждаются животные.</p>
          </div>
          <div className={styles.bubbleBlock}>
            <div className={styles.photoForPhraseBubbleWrapper}>
              <img className={styles.photoForPhraseBubble} src="/img/needs-photo-with-bubble.png" alt="спасибо"/>
            </div>
            <div className={styles.phraseBubbleWrapper}>
              <div>
                <img className={styles.phraseBubble} src="/img/needs-phrase-bubble.png"/>
              </div>
            </div>
            <div className={styles.textBubbleWrapper}>
              <div className={styles.textBubble}>
                <p>Вкусняхи и игрушки —<br/>моя слабость!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
}