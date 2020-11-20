import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/index.module.scss'

export default function Index(title='Home Page') {
  return <MainLayout>
    <div className={styles.firstBlock}>
      <div className={styles.firstBlockTitle}>
        <h1>Помогать легко!</h1>
        <h3 className={styles.titleDesc}>Подари хвостикам надежду на новую жизнь с командой волонтеров “Теремка”</h3>
      </div>
      <div className={styles.firstBlockImg}>
        <img src="/img/first-block-animals-cut.png" alt="animals"/>
      </div>
      <div className={styles.waveBlock}>
        <img src="/img/yellow-wave.png" />
      </div>
    </div>

    <div className={styles.findHomeBlock}>
      <h2 className={styles.findHomeTitle}>Сейчас ищут дом:</h2>
      <div className={styles.findCarouselBlock}>
        <div className={styles.findCarouselArrowLeft, styles.findCarouselArrow}>

        </div>
        <div className={styles.findCarouselCard}>
          <img src="" alt="pet"/>
          <div className={styles.findCarouselCardDesc}>
            <div className="findCarouselCardDescRow">
              <span></span>
              <img src=""/>
              <span></span>
              <span></span>
            </div>
            <div className="findCarouselCardDescRow"></div>
          </div>
        </div>
        <div className={styles.findCarouselCard}></div>
        <div className={styles.findCarouselCard}></div>
        <div className={styles.findCarouselArrowRight, styles.findCarouselArrow}>
          
        </div>
      </div>
    </div>
  </MainLayout>
}