import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/index.module.scss'

export default function Index(title='Home Page') {
  return <MainLayout>
    <section>
      <div className={styles.firstBlock}>
        <div className={styles.firstBlockTitle}>
          <h1>Помогать легко!</h1>
          <h3 className={styles.titleDesc}>Подари хвостикам надежду на новую жизнь с командой волонтеров “Теремка”</h3>
        </div>
        <div className={styles.firstBlockImg}>
          <img src="/img/first-block-animals-cut.png" alt="животные"/>
        </div>
        <div className={styles.waveBlock}>
          <img src="/img/yellow-wave.png" />
        </div>
      </div>
    </section>

    <section>
      <div className={`${styles.findHomeBlock} ${styles.pagePaddings}`}>
        <h2 className={styles.findHomeTitle}>Сейчас ищут дом:</h2>
        <div className={styles.findCarouselBlock}>
          <div className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
            <img src="/img/arrow-left.png" alt="влево"/>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Misha.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Миша</h3>
                <img src="/img/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>10 лет</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Kitty.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Китти</h3>
                <img src="/img/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>4 года</span>
                <span className={styles.petSex}>Ж</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Zhenya.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Женя</h3>
                <img src="/img/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>3 года</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
            <img src="/img/arrow-right.png" alt="вправо"/>
          </div>
        </div>

        <div className={styles.videoBlock}>
          <div className={styles.videoText}>
            <p>Уже более 10 лет мы помогаем животным, которые попали в беду или остались без дома. Как и в любом приюте, основные заботы лежат на плечах волонтёров. 
              Почти все нужды, такие как лечение и содержание животных, строительство новых вольеров, зарплаты сотрудникам приюта, — обеспечиваются за счёт пожертвований.</p>
            <p>Вы тоже можете внести свой вклад! Читайте информацию ниже и выберите тот способ, который будет для вас удобнее.</p>
          </div>
          <div className={styles.videoWrapper}>insert video here</div>
        </div>

        <div className={styles.bubbleBlock}>
          <img className={styles.photoForPhraseBubble} src="/img/photo-for-phrase-bubble.png" alt="спасибо"/>
          <div className={styles.phraseBubbleWrapper}>
            <img className={styles.phraseBubble} src="/img/phrase-bubble.png"/>
            <div className={styles.textBubble}>
              <p>Я не могу отблагодарить<br/>услугой за услугу...</p>
              <p>Но я могу дать лапу)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
}