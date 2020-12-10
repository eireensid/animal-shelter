import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/basicNeedsOfTeremok.module.scss'

export default function BasicNeedsOfTeremok({title='Нужды приюта', animals}) {
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
            <h2>Основные нужды Теремка</h2>
            <p>Животные постоянно нуждаются в средствах по уходу, кормах, лекарствах и других необходимых вещах, которые вы можете самостоятельно принести 
              или отправить в помощь приюту. На этой странице вы найдете список вещей, в которых постоянно нуждаются животные.</p>
          </div>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <img className={styles.photoWithPhraseBubble} src="/img/needs-dog-with-bubble.svg" alt="спасибо"/>
          </div>
        </div>

        <div className={styles.needsListWrapper}>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Перчатки тканевые и резиновые “М”</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Консервные ножи</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Ковшики для зачерпывания каши, желательно литые</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Капли от блох и глистогонка</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Крупа, предпочтительно гречневая</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Консервы для собак и кошек</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Сухой корм для собак и кошек</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Металлические вёдра 7-9 литров</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Поводки 3 метра брезентовые, широкие</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Мешки под мусор белые, строительные</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Ошейники на средних собак с большим колличеством дырочек</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Губки для мытья посуды</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Стиральный порошок</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Хозяйственное мыло</span>
          </div>
          <div className={styles.needsListItem}>
            <img src="/img/ways-to-help/ellipse.png"/>
            <span>Синулокс 500 и 250 мг</span>
          </div>
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