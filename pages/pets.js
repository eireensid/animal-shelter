import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import AnimalsListPagination from '~/components/AnimalsListPagination'
import BankCard from '~/components/BankCard'
import styles from '~/styles/pets.module.scss'

export default function Pets({title='Питомцы', animals}) {
  return <MainLayout>
    <section>
      <div className={styles.petsBlock}>
        <BreadCrumbs title={title}/>
        <div className={styles.petsWrapper}>
          <div className={styles.petsDesc}>
            <h2>Наши питомцы</h2>
            <p>Подарите дом одному из них. Наблюдать каждый день счастливый и благодарный взгляд спасённой души — бесценно! Хотите подарить билетик в 
              домашнюю жизнь одному из наших подопечных?</p>
          </div>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <img className={styles.photoWithPhraseBubble} src="/img/pets-cat-with-bubble.svg" alt="спасибо"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className={`${styles.ourPetsBlock} ${styles.pagePaddings}`}>
        <h2>Выберите питомца:</h2>
        <p className={styles.ourPetsDesc}>Знакомьтесь с нашими питомцами! Мы уверены, что здесь вы найдёте того самого друга. Воспользуйтесь фильтрами для удобства поиска.</p>
        <p className={`${styles.ourPetsDesc} ${styles.ourPetsPadding}`}>Если вы уже знаете имя питомца, который вас заинтересовал, воспользуйтесь поиском по имени.</p>
        
        <AnimalsListPagination animals={animals}/>
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