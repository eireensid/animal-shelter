import Router from 'next/router'
import {useState} from 'react'
import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/walksWithDogs.module.scss'

export default function WalksWithDogs({title='Прогулки с собаками'}) {
  const [animals, setAnimals] = useState([
    {name: "Миша", age: "10 лет", sex: "М", photo: "Misha.png"},
    {name: "Китти", age: "4 года", sex: "Ж", photo: "Kitty.png"},
    {name: "Женя", age: "3 года", sex: "М", photo: "Zhenya.png"},
  ])
  return <MainLayout>
    <section>
      <div className={styles.walksBlock}>
        <BreadCrumbs title={title}/>
        <div className={styles.walksWrapper}>
          <div className={styles.walksDesc}>
            <h2>Прогулки с собаками</h2>
            <p>Это одно из самых позитивных занятий в нашем приюте! Хоть у этих собак пока нет хозяев, вы сможете дать им чувство нужности и веселья. 
              А сколько радости они дают в ответ, не передать словами. Мы с пёсиками ждем вас!</p>
          </div>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <img className={styles.photoWithPhraseBubble} src="/img/walksPage/walks-dog-with-bubble.svg" alt="гулять"/>
          </div>
        </div>       
      </div>
    </section>
    <section>
      <div className={`${styles.walksGalleryBlock} ${styles.pagePaddings}`}>
        <h2>Кадры с прогулок</h2>
        <div className={styles.walksGallery}>
          {/* <div className={styles.walksGalleryLeft}>
            <img src="/img/walksPage/left1.png" alt="прогулка"/>
            <div className={styles.insideGalleryLeftMiddle}>
              <img src="/img/walksPage/left2.png" alt="прогулка"/>
              <img src="/img/walksPage/middle1.png" alt="прогулка"/>
            </div>
            <div className={styles.insideGalleryLeftMiddle}>
              <div>
                <img src="/img/walksPage/left3.png" alt="прогулка"/>
                <img src="/img/walksPage/left4.png" alt="прогулка"/>
                <img src="/img/walksPage/left5.png" alt="прогулка"/>
              </div>
              <div>
                <img src="/img/walksPage/middle2.png" alt="прогулка"/>
                <img src="/img/walksPage/middle3.png" alt="прогулка"/>
                <img src="/img/walksPage/middle4.png" alt="прогулка"/>
              </div>
            </div>
            <img src="/img/walksPage/left6.png" alt="прогулка"/>
          </div>
          <div className={styles.walksGalleryRight}>
            <img src="/img/walksPage/right1.png" alt="прогулка"/>
            <img src="/img/walksPage/right2.png" alt="прогулка"/>
            <img src="/img/walksPage/right3.png" alt="прогулка"/>
            <img src="/img/walksPage/right4.png" alt="прогулка"/>
          </div> */}
          <img src="/img/walksPage/walkGalleryPhotos.png" alt="прогулка"/>
        </div>
      </div>
    </section>
    <section>
      <div className={`${styles.visitingRulesWrapper} ${styles.pagePaddings}`}>
        <VisitingRules/>
      </div>
    </section>
    <section>
      <div className={`${styles.animalCarouselWrapper} ${styles.pagePaddings}`}>
        <AnimalCarousel animals={animals}/>
      </div>
    </section>
    <section>
      <div className={`${styles.bankCardWrapper} ${styles.pagePaddings}`}>
        <BankCard/>
      </div>
    </section>
  </MainLayout>
}