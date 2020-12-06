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
    <section>
      <div className={`${styles.bankCardWrapper} ${styles.pagePaddings}`}>
        <h2>Для пожертвований:</h2>
        <BankCard/>
      </div>
    </section>
  </MainLayout>
}