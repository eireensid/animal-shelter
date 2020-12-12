import Router from 'next/router'
import Link from 'next/link'
import { MainLayout } from '~/components/MainLayout'
import AnimalCarousel from '~/components/AnimalCarousel'
import AnimalsList from '~/components/AnimalsList'
import SocialBtns from '~/components/SocialBtns'
import BankCard from '~/components/BankCard'
import BankCardModal from '~/components/BankCardModal'
import styles from '~/styles/index.module.scss'

export default function Index({title='Главная', animals}) {
  const filteredAnimals = animals.filter((item) => {
    return item.paw === "looking-for-home.png"
  })

  return <MainLayout>
    <section className={styles.firstBlockSection}>
      <div className={styles.firstBlock}>
        <div className={styles.firstBlockTitle}>
          <h1>Помогать легко!</h1>
          <h3 className={styles.titleDesc}>Подари хвостикам надежду на новую жизнь с командой волонтеров “Теремка”</h3>
        </div>
        <div className={styles.firstBlockImg}>
          <img src="/img/first-block-animals-cut-nobg.png" alt="животные"/>
        </div>
        <div className={styles.firstBlockImgTablet}>
          <img src="/img/tablet/first-block-animals-tablet-cut1.png" alt="животные"/>
        </div>
      </div>
      <svg className={styles.waveDesktop} viewBox="0 0 1440 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M848.411 95.4772C629.058 70.6965 450.479 -28.8145 221.037 8.13269C105.85 26.6814 58.8155 59.5476 0.200227 95.551L0.184691 253.285L1444.17 253.16L1444.19 30.473C1320.11 -28.8791 1035.12 116.57 848.411 95.4772Z" fill="#FFF5DA"/>
      </svg>  
      <svg className={styles.waveTablet} viewBox="0 0 768 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M552.395 157.261C357.504 133.91 194.806 47.9331 0.0122231 56.5781L-0.0400326 324.797L767.936 324.648L767.973 133.971C691.53 151.895 616.219 164.908 552.395 157.261Z" fill="#FFF5DA"/>
      </svg>
      <svg className={styles.waveMobile} viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M199.367 70.208C128.68 61.7028 65.1238 39.2865 -0.000403353 24.2984L-0.000388884 169.869L320 169.869L320 58.071C277.157 67.8307 235.212 74.5209 199.367 70.208Z" fill="#FFF5DA"/>
      </svg>
    </section>
    <section className={styles.findHomeBlockSection}>
      <div className={`${styles.findHomeBlock} ${styles.pagePaddings}`}>
        <AnimalCarousel animals={filteredAnimals} title="Сейчас ищут дом:"/>

        <div className={styles.videoBlock}>
          <div className={styles.videoText}>
            <p>Уже более 10 лет мы помогаем животным, которые попали в беду или остались без дома. Как и в любом приюте, основные заботы лежат на плечах волонтёров. 
              Почти все нужды, такие как лечение и содержание животных, строительство новых вольеров, зарплаты сотрудникам приюта, — обеспечиваются за счёт пожертвований.</p>
            <p>Вы тоже можете внести свой вклад! Читайте информацию ниже и выберите тот способ, который будет для вас удобнее.</p>
          </div>
          <div className={styles.videoWrapper}>
            <iframe id="video1" width="484" height="271" src="https://youtube.com/embed/9g_novIz3Uc"/>
          </div>
        </div>

        <div className={styles.bubbleBlock}>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <img className={styles.photoWithPhraseBubble} src="/img/dog-with-bubble.svg" alt="спасибо"/>
          </div>
        </div>
        <h2 className={styles.waysToHelpTitle}>Как вы можете нам помочь:</h2>
      </div>
      <svg className={styles.waveDesktop} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M848.411 95.4772C629.058 70.6965 450.479 -28.8145 221.037 8.13269C105.85 26.6814 58.8155 59.5476 0.200227 95.551L0.184691 253.285L1444.17 253.16L1444.19 30.473C1320.11 -28.8791 1035.12 116.57 848.411 95.4772Z" fill="white"/>
      </svg>
      <svg className={styles.waveTablet} viewBox="0 0 768 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M552.395 157.261C357.504 133.91 194.806 47.9331 0.0122231 56.5781L-0.0400326 324.797L767.936 324.648L767.973 133.971C691.53 151.895 616.219 164.908 552.395 157.261Z" fill="white"/>
      </svg>
      <svg className={styles.waveMobile} viewBox="0 0 320 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M199.367 70.208C128.68 61.7028 65.1238 39.2865 -0.000403353 24.2984L-0.000388884 169.869L320 169.869L320 58.071C277.157 67.8307 235.212 74.5209 199.367 70.208Z" fill="white"/>
      </svg>
    </section>

    <section className={styles.waysToHelpBlockSection}>
      <div className={`${styles.waysToHelpBlock} ${styles.pagePaddings}`}>
        <div className={styles.waysToHelp}>
          <div className={styles.waysToHelpDesc}>
            <div className={styles.waysToHelpDescTitleWrapper}>
              <img src="/img/ways-to-help/ellipse.png"/>
              <h3>Финансовая помощь</h3>
            </div>
            <div className={styles.waysToHelpDescBtnWrapper}>
              <p>Приют существует за счёт пожертвований. Для нас важна любая сумма! Помогите нам поддерживать качество жизни хвостиков.</p>
              <span className={styles.spendingsReport}>*Отчеты о затраченных средствах вы можете посмотреть <Link href="/shelter-reports"><span>здесь</span></Link></span>              
              <BankCardModal parent={"index"}/>
            </div>
          </div>
          <div className={`${styles.waysToHelpImg} ${styles.waysToHelpImgMobile}`}>
            <img src="/img/ways-to-help/financial-help.png" alt="финансовая помощь"/>
          </div>
        </div>

        <div className={styles.waysToHelpReversed}>
          <div className={styles.waysToHelpDesc}>
            <div className={styles.waysToHelpDescTitleWrapper}>
              <img src="/img/ways-to-help/ellipse.png"/>
              <h3>Забрать питомца домой</h3>
            </div>
            <div className={styles.waysToHelpDescBtnWrapper}>
              <p>Подарите дом одному из них. Наблюдать каждый день этот счастливый и благодарный взгляд — бесценно!</p>
              <button onClick={() => Router.push('/pets').then(() => window.scrollTo(0, 0))}>Питомцы</button>
            </div>
          </div>
          <div className={styles.waysToHelpImg}>
            <img src="/img/ways-to-help/take-home.png" alt="забрать домой"/>
          </div>
        </div>

        <div className={styles.waysToHelp}>
          <div className={styles.waysToHelpDesc}>
            <div className={styles.waysToHelpDescTitleWrapper}>
              <img src="/img/ways-to-help/ellipse.png"/>
              <h3>Стать опекуном или помочь с адаптацией</h3>
            </div>
            <div className={styles.waysToHelpDescBtnWrapper}>
              <p>Приют очень сильно нуждается в опекунах! Если у вас нет возможности забрать животное, но очень хочется окружить его заботой и вниманием, 
                станьте опекуном (временным хозяином), навещайте питомца в приюте и не дайте его взгляду потухнуть без человеческого внимания.</p>
              <button onClick={() => Router.push('/guardianship-and-adaptation').then(() => window.scrollTo(0, 0))}>Подробнее</button>
            </div>
          </div>
          <div className={styles.waysToHelpImg}>
            <img src="/img/ways-to-help/become-caretaker.png" alt="стать опекуном"/>
          </div>
        </div>

        <div className={styles.waysToHelpReversed}>
          <div className={styles.waysToHelpDesc}>
            <div className={styles.waysToHelpDescTitleWrapper}>
              <img src="/img/ways-to-help/ellipse.png"/>
              <h3>Прогулки с собаками</h3>
            </div>
            <div className={styles.waysToHelpDescBtnWrapper}>
              <p>Не секрет, что собакам просто необходимы регулярные прогулки. В нашем приюте больше 250 собак, и выгуливать каждую мы физически не успеваем. 
                Поэтому ждем всех, кто хочет порадовать песиков и получить массу положительных эмоций в ответ.</p>
              <button onClick={() => Router.push('/walks-with-dogs').then(() => window.scrollTo(0, 0))}>Подробнее</button>
            </div>
          </div>
          <div className={styles.waysToHelpImg}>
            <img src="/img/ways-to-help/walking-with-dogs.png" alt="прогулки с собаками"/>
          </div>
        </div>

        <div className={styles.waysToHelp}>
          <div className={styles.waysToHelpDesc}>
            <div className={styles.waysToHelpDescTitleWrapper}>
              <img src="/img/ways-to-help/ellipse.png"/>
              <h3>Принести нужные вещи</h3>
            </div>
            <div className={styles.waysToHelpDescBtnWrapper}>
              <p>Животные постоянно нуждаются в средствах по уходу, кормах, лекарствах и других необходимых вещах. Вы можете привезти нужды самостоятельно 
                или передать волонтерам в городе.</p>
              <button onClick={() => Router.push('/basic-needs-of-teremok').then(() => window.scrollTo(0, 0))}>Список нужд</button>
            </div>
          </div>
          <div className={styles.waysToHelpImg}>
            <img src="/img/ways-to-help/bring-stuff.png" alt="принести нужные вещи"/>
          </div>
        </div>

        <div className={styles.waysToHelpReversed}>
          <div className={styles.waysToHelpDesc}>
            <div className={styles.waysToHelpDescTitleWrapper}>
              <img src="/img/ways-to-help/ellipse.png"/>
              <h3>Помощь с пиаром</h3>
            </div>
            <div className={styles.waysToHelpDescBtnWrapper}>
              <p>Репосты — наше всё. 90% животных находят дом только благодаря этому. Подписывайтесь на нас в социальных сетях и помогайте распространять информацию 
                о наших питомцах. Возможно, именно вы поможете кому-то из них стать счастливым домашним любимцем.</p>
              <div className={styles.socialsBlock}>
                <SocialBtns/>
              </div>
            </div>
          </div>
          <div className={styles.waysToHelpImg}>
            <img src="/img/ways-to-help/pr-help.png" alt="помощь с пиаром"/>
          </div>
        </div>
      </div>
      <svg className={styles.waveDesktop} viewBox="0 0 1440 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M848.411 95.4772C629.058 70.6965 450.479 -28.8145 221.037 8.13269C105.85 26.6814 58.8155 59.5476 0.200227 95.551L0.184691 253.285L1444.17 253.16L1444.19 30.473C1320.11 -28.8791 1035.12 116.57 848.411 95.4772Z" fill="#FFF5DA"/>
      </svg>     
      <svg className={styles.waveTablet} viewBox="0 0 768 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M552.395 157.261C357.504 133.91 194.806 47.9331 0.0122231 56.5781L-0.0400326 324.797L767.936 324.648L767.973 133.971C691.53 151.895 616.219 164.908 552.395 157.261Z" fill="#FFF5DA"/>
      </svg>
      <svg className={styles.waveMobile} viewBox="0 0 320 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M199.367 70.208C128.68 61.7028 65.1238 39.2865 -0.000403353 24.2984L-0.000388884 169.869L320 169.869L320 58.071C277.157 67.8307 235.212 74.5209 199.367 70.208Z" fill="#FFF5DA"/>
      </svg>
    </section>

    <section className={styles.ourPetsBlockSection}>
      <div className={`${styles.ourPetsBlock} ${styles.pagePaddings}`}>
        <h2>Наши питомцы</h2>
        <p className={styles.ourPetsDesc}>Знакомьтесь с нашими питомцами! Мы уверены, что здесь вы найдёте того самого друга. Воспользуйтесь фильтрами для удобства поиска.</p>
        <p className={`${styles.ourPetsDesc} ${styles.ourPetsPadding}`}>Если вы уже знаете имя питомца, который вас заинтересовал, воспользуйтесь поиском по имени.</p>
        
        <AnimalsList animals={animals}/>

        <div className={styles.morePetsBtn}>
          <button onClick={() => Router.push('/pets').then(() => window.scrollTo(0, 0))}>Больше питомцев</button>
        </div>
        <div className={styles.morePetsBtnTablet}>
          <button onClick={() => Router.push('/pets').then(() => window.scrollTo(0, 0))}>Все питомцы</button>
        </div>

        <div className={styles.bankCardWrapper}>
          <h2>Для пожертвований:</h2>
          <BankCard/>
        </div>
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