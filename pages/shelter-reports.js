import Router from 'next/router'
import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/shelterReports.module.scss'

export default function ShelterReports({title='Отчеты', animals}) {
  const filteredAnimals = animals.filter((item) => {
    return item.paw === "need-adoptation.png"
  })
  return <MainLayout>
    <section>
      <div className={styles.reportsBlock}>
        <BreadCrumbs title={title}/>
        <div className={styles.reportsWrapper}>
          <div className={styles.reportsDesc}>
            <h2>{title}</h2>
            <p>За все время существования приюта мы собрали большое количество пожертвований на лечение и содержание хвостиков, а значит и много отчетов 
              о затратах. Все отчеты вы всегда можете посмотреть в нашей группе ВКонтакте, а здесь мы разместили ссылки на самые актуальные из них.</p>
          </div>
          <div className={styles.reports}>
            <div className={styles.reportsBtns}>
              <button><a href="https://vk.com/topic-188970721_39934359" target="_blank"><span>ФО Крупа</span></a></button>
              <button><a href="https://vk.com/topic-188970721_40039637" target="_blank"><span>ФО Лечение</span></a></button>
              <button><a href="https://vk.com/topic-188970721_40010432" target="_blank"><span>ФО Опилки</span></a></button>
            </div>
            <img src="/img/reports-photo.png" alt="отчеты"/>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={`${styles.animalCarouselWrapper} ${styles.pagePaddings}`}>
        <AnimalCarousel animals={filteredAnimals} title="Им срочно нужна адаптация:"/>
      </div>
    </section>
    <section>
      <div className={`${styles.bankCardWrapper} ${styles.pagePaddings}`}>
        <BankCard/>
      </div>
    </section>
  </MainLayout>
}