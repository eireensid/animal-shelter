import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
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
              <button onClick={() => window.open('https://vk.com/topic-188970721_39934359', '_blank')}><span>ФО Крупа</span></button>
              <button onClick={() => window.open('https://vk.com/topic-188970721_40039637', '_blank')}><span>ФО Лечение</span></button>
              <button onClick={() => window.open('https://vk.com/topic-188970721_40010432', '_blank')}><span>ФО Опилки</span></button>
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