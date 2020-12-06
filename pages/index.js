import Router from 'next/router'
import Link from 'next/link'
import { MainLayout } from '~/components/MainLayout'
import AnimalCard from '~/components/AnimalCard'
import AnimalCarousel from '~/components/AnimalCarousel'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import SocialBtns from '~/components/SocialBtns'
import BankCard from '~/components/BankCard'
import BankCardModal from '~/components/BankCardModal'
import styles from '~/styles/index.module.scss'

export default function Index({title='Главная', animals}) {
  const filteredAnimals = animals.filter((item) => {
    return item.paw === "looking-for-home.png"
  })

  const galleryAnimals = animals.slice(0, 12)

  return <MainLayout>
    <section>
      <div className={styles.firstBlock}>
        <div className={styles.firstBlockTitle}>
          <h1>Помогать легко!</h1>
          <h3 className={styles.titleDesc}>Подари хвостикам надежду на новую жизнь с командой волонтеров “Теремка”</h3>
        </div>
        <div className={styles.firstBlockImg}>
          <img src="/img/first-block-animals-cut-nobg.png" alt="животные"/>
        </div>
      </div>
    </section>
    <section>
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
    </section>

    <section>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <img src="/img/ways-to-help/pr-help.png" alt="помощь с пиаром"/>
          </div>
        </div>
      </div>
      
    </section>

    <section>
      <div className={`${styles.ourPetsBlock} ${styles.pagePaddings}`}>
        <h2>Наши питомцы</h2>
        <p className={styles.ourPetsDesc}>Знакомьтесь с нашими питомцами! Мы уверены, что здесь вы найдёте того самого друга. Воспользуйтесь фильтрами для удобства поиска.</p>
        <p className={`${styles.ourPetsDesc} ${styles.ourPetsPadding}`}>Если вы уже знаете имя питомца, который вас заинтересовал, воспользуйтесь поиском по имени.</p>
        <div className={styles.animalFiltersBlock}>
          <div className={styles.animalInputsBlock}>
            <FindAnimalInput inputTitle="Все животные"/>
            <FindAnimalInput inputTitle="Все возраста"/>
            <SearchInput/>
          </div>
          <div className={styles.animalFilterWrapper}>
            <div className={styles.animalFilterWrapperTop}>            
              <PawLabel pawColor="/img/paws/looking-for-home.png" pawMeaning="Ищут дом"/>
              <PawLabel pawColor="/img/paws/need-adoptation.png" pawMeaning="Нужна адаптация"/>
              <PawLabel pawColor="/img/paws/baby-pets.png" pawMeaning="Малыши"/>
            </div>
            <div className={styles.animalFilterWrapperBottom}>
              <PawLabel pawColor="/img/paws/need-guardian.png" pawMeaning="Нужен опекун"/>
              <PawLabel pawColor="/img/paws/undergo-treatment.png" pawMeaning="Проходят лечение"/>
            </div>
          </div>
        </div>

        <div className={styles.ourPetsGallery}>
          {galleryAnimals.map((animal, index) => (
            <AnimalCard animal={animal} key={index}/>
          ))}
        </div>

        <div className={styles.morePetsBtn}>
          <button onClick={() => Router.push('/pets').then(() => window.scrollTo(0, 0))}>Больше питомцев</button>
        </div>

        <div className={styles.bankCardWrapper}>
          <h2>Для пожертвований:</h2>
          <BankCard/>
        </div>
      </div>
    </section>
  </MainLayout>
}