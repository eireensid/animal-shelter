import {MainLayout} from '~/components/MainLayout'
import Image from 'next/image'
import BreadCrumbs from '~/components/BreadCrumbs'
import AnimalsList from '~/components/AnimalsList'
import BankCard from '~/components/BankCard'
import styles from '~/styles/pets.module.scss'

export default function Pets({title='Питомцы', animals}) {

  return <MainLayout>
    <section>
      <div className={styles.firstBlock}>
        <div className={styles.firstWrapper}>
          <div className={styles.firstDesc}>
            <div className={styles.breadCrumbsWrapper}>
              <BreadCrumbs title={title}/>
            </div>
            <h2>Наши питомцы</h2>
            <p>Подарите дом одному из них. Наблюдать каждый день счастливый и благодарный взгляд спасённой души — бесценно!</p>
          </div>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <Image
              src="/img/pets-cat-with-bubble.svg"
              alt="питомцы"
              width={584}
              height={405}
            />
            {/* <img className={styles.photoWithPhraseBubble} src="/img/pets-cat-with-bubble.svg" alt="питомцы"/> */}
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className={`${styles.ourPetsBlock} ${styles.pagePaddings}`}>
        <h2>Выберите питомца:</h2>
        <p className={styles.ourPetsDesc}>Знакомьтесь с нашими питомцами! Мы уверены, что здесь вы найдёте того самого друга. Воспользуйтесь фильтрами для удобства поиска.</p>
        <p className={`${styles.ourPetsDesc} ${styles.ourPetsPadding}`}>Если вы уже знаете имя питомца, который вас заинтересовал, воспользуйтесь поиском по имени.</p>
        
        <AnimalsList animals={animals}/>
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