import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/walksWithDogs.module.scss'

export default function WalksWithDogs({title='Прогулки с собаками', animals}) {
  const filteredAnimals = animals.filter((item) => {
    return item.paw === "need-adoptation.png"
  })
  return <MainLayout>
    <section>
      <div className={styles.firstBlock}>
        <div className={styles.firstWrapper}>
          <div className={styles.firstDesc}>
            <div className={styles.breadCrumbsWrapper}>
              <BreadCrumbs title={title}/>
            </div>
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
        <AnimalCarousel animals={filteredAnimals} title="Им срочно нужна адаптация:"/>
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
      <svg className={styles.waveTablet} viewBox="0 0 768 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M552.395 157.261C357.504 133.91 194.806 47.9331 0.0122231 56.5781L-0.0400326 324.797L767.936 324.648L767.973 133.971C691.53 151.895 616.219 164.908 552.395 157.261Z" fill="#FFC393"/>
      </svg>
      <svg className={styles.waveMobile} viewBox="0 0 320 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M199.367 70.208C128.68 61.7028 65.1238 39.2865 -0.000403353 24.2984L-0.000388884 169.869L320 169.869L320 58.071C277.157 67.8307 235.212 74.5209 199.367 70.208Z" fill="#FFC393"/>
      </svg>
    </section>
  </MainLayout>
}