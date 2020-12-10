import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/hellosFromHomes.module.scss'

export default function HellosFromHomes({title='Привет из дома', animals}) {
  const filteredAnimals = animals.filter((item) => {
    return item.paw === "looking-for-home.png"
  })
  return <MainLayout>
    <section>
      <div className={styles.firstBlock}>
        <div className={styles.firstWrapper}>
          <div className={styles.firstDesc}>
            <div className={styles.breadCrumbsWrapper}>
              <BreadCrumbs title={title}/>
            </div>
            <h2>Приветы из дома</h2>
            <p>Смотрите, как наши малыши радуются дома, как горят их глаза! Каждый день наблюдать этот счастливый благодарный взгляд — бесценно. 
              Вы тоже можете подарить билетик в домашнюю жизнь одному из наших подопечных.</p>
          </div>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <img className={styles.photoWithPhraseBubble} src="/img/hellos-from-homes-dog-with-bubble.svg" alt="спасибо"/>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={`${styles.foundHomeBlock} ${styles.pagePaddings}`}>
        <h2>Они обрели семью:</h2>
      </div>
    </section>
    <section>
      <div className={`${styles.animalCarouselWrapper} ${styles.pagePaddings}`}>
        <AnimalCarousel animals={filteredAnimals} title="Сейчас ищут дом:"/>
      </div>
    </section>
    <section className={styles.bankCardWrapperSection}>
      <div className={`${styles.bankCardWrapper} ${styles.pagePaddings}`}>
        <h2>Для пожертвований:</h2>
        <BankCard/>
      </div>
      <svg className={styles.waveDesktop} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M848.411 95.4772C629.058 70.6965 450.479 -28.8145 221.037 8.13269C105.85 26.6814 58.8155 59.5476 0.200227 95.551L0.184691 253.285L1444.17 253.16L1444.19 30.473C1320.11 -28.8791 1035.12 116.57 848.411 95.4772Z" fill="#FFC393"/>
      </svg>
    </section>
  </MainLayout>
}