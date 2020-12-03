import Router from 'next/router'
import {useState} from 'react'
import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/basicNeedsOfTeremok.module.scss'

export default function BasicNeedsOfTeremok({title='Нужды приюта'}) {
  const [animals, setAnimals] = useState([
    {name: "Миша", age: "10 лет", sex: "М", photo: "Misha.png"},
    {name: "Китти", age: "4 года", sex: "Ж", photo: "Kitty.png"},
    {name: "Женя", age: "3 года", sex: "М", photo: "Zhenya.png"}
  ])
  return <MainLayout>
    <section>
      <div className={styles.needsBlock}>
        <BreadCrumbs title={title}/>
        <div className={styles.needsWrapper}>
          <div className={styles.needsDesc}>
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