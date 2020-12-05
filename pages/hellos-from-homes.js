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
      <div className={styles.hellosBlock}>
        <BreadCrumbs title={title}/>
        <div className={styles.hellosWrapper}>
          <div className={styles.hellosDesc}>
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
    <section>
      <div className={`${styles.bankCardWrapper} ${styles.pagePaddings}`}>
        <BankCard/>
      </div>
    </section>
  </MainLayout>
}