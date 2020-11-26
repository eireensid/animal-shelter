import Link from 'next/link'
import {useState} from 'react'
import { MainLayout } from '~/components/MainLayout'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/index.module.scss'

export default function Index(title='Главная') {

  const [animals, setAnimals] = useState([
    {name: "Миша", age: "10 лет", sex: "М"},
    {name: "Китти", age: "4 года", sex: "Ж"},
    {name: "Женя", age: "3 года", sex: "М"}
  ])

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
        <div className={styles.waveBlock}>
          <img className={styles.wave} src="/img/yellow-wave.png" />
        </div>
      </div>
    </section>

    <section>
      <div className={`${styles.findHomeBlock} ${styles.pagePaddings}`}>
        <h2 className={styles.findHomeTitle}>Сейчас ищут дом:</h2>
        <div className={styles.findCarouselBlock}>
          <div className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
            <img src="/img/arrow-left.png" alt="влево"/>
          </div>
          {animals.map((animal, key) => (
            <AnimalCard name={animal.name} age={animal.age} sex={animal.sex} key={Math.random()}/>
          ))}
          <div className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
            <img src="/img/arrow-right.png" alt="вправо"/>
          </div>
        </div>

        {/* <div className={styles.findCarouselBlock}>
          <div className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
            <img src="/img/arrow-left.png" alt="влево"/>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Misha.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Миша</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>10 лет</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Kitty.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Китти</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>4 года</span>
                <span className={styles.petSex}>Ж</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Zhenya.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Женя</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>3 года</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
            <img src="/img/arrow-right.png" alt="вправо"/>
          </div>
        </div> */}

        <div className={styles.videoBlock}>
          <div className={styles.videoText}>
            <p>Уже более 10 лет мы помогаем животным, которые попали в беду или остались без дома. Как и в любом приюте, основные заботы лежат на плечах волонтёров. 
              Почти все нужды, такие как лечение и содержание животных, строительство новых вольеров, зарплаты сотрудникам приюта, — обеспечиваются за счёт пожертвований.</p>
            <p>Вы тоже можете внести свой вклад! Читайте информацию ниже и выберите тот способ, который будет для вас удобнее.</p>
          </div>
          <div className={styles.videoWrapper}>insert video here</div>
        </div>

        <div className={styles.bubbleBlock}>
          <div className={styles.photoForPhraseBubbleWrapper}>
            <img className={styles.photoForPhraseBubble} src="/img/photo-for-phrase-bubble.png" alt="спасибо"/>
          </div>
          <div className={styles.phraseBubbleWrapper}>
            <div>
              <img className={styles.phraseBubble} src="/img/phrase-bubble.png"/>
            </div>
          </div>
          <div className={styles.textBubbleWrapper}>
            <div className={styles.textBubble}>
              <p>Я не могу отблагодарить<br/>услугой за услугу...</p>
              <p>Но я могу дать лапу)</p>
            </div>
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
              <span className={styles.spendingsReport}>*Отчеты о затраченных средствах вы можете посмотреть <span>здесь</span></span>
              <button>Пожертвовать</button>
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
              <button>Питомцы</button>
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
              <button>Подробнее</button>
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
              <p>Не секрет, что собакам просто необходимы регулярные прогулки. В нашем приюте больше 250 собак и выгуливать каждую мы физически не успеваем. 
                Поэтому ждем всех, кто хочет порадовать песиков и получить массу положительных эмоций в ответ.</p>
              <button>Подробнее</button>
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
              <button>Список нужд</button>
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
                <img src="/img/whatsapp.svg" alt="what's app"/>
                <img src="/img/vk.svg" alt="vk"/>
                <img src="/img/instagram.svg" alt="instagram"/>
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
        <div className={styles.animalFiltersBlock}>
          <div className={styles.animalFilterInput}>
            <h4>Все</h4>
            <img src="img/input-arrow-down.png"/>
          </div>
          <div className={styles.animalFilterWrapper}>
            <div className={styles.animalFilterWrapperTop}>
              <div className={styles.animalFilter}>
                <img src="/img/paws/looking-for-home.png"/>
                <h4>Ищут дом</h4>
              </div>
              <div className={styles.animalFilter}>
                <img src="/img/paws/need-adoptation.png"/>
                <h4>Нужна адаптация</h4>
              </div>
              <div className={styles.animalFilter}>
                <img src="/img/paws/baby-pets.png"/>
                <h4>Малыши</h4>
              </div>
            </div>
            <div className={styles.animalFilterWrapperBottom}>
              <div className={styles.animalFilter}>
                <img src="/img/paws/need-guardian.png"/>
                <h4>Нужен опекун</h4>
              </div>
              <div className={styles.animalFilter}>
                <img src="/img/paws/undergo-treatment.png"/>
                <h4>Проходят лечение</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.findCarouselBlock}>
          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Misha.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Миша</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>10 лет</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Kitty.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Китти</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>4 года</span>
                <span className={styles.petSex}>Ж</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Zhenya.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Женя</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>3 года</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.findCarouselBlock}>
          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Misha.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Миша</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>10 лет</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Kitty.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Китти</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>4 года</span>
                <span className={styles.petSex}>Ж</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Zhenya.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Женя</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>3 года</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.findCarouselBlock}>
          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Misha.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Миша</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>10 лет</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Kitty.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Китти</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>4 года</span>
                <span className={styles.petSex}>Ж</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Zhenya.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Женя</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>3 года</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.findCarouselBlock}>
          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Misha.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Миша</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>10 лет</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Kitty.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Китти</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>4 года</span>
                <span className={styles.petSex}>Ж</span>
              </div>
            </div>
          </div>

          <div className={styles.findCarouselCard}>
            <div className={styles.petImgBlock}>
              <img className={styles.petImg} src="/img/Zhenya.png" alt="питомец"/>
            </div>
            <div className={styles.findCarouselCardDesc}>
              <div className={styles.findCarouselCardDescRow}>
                <h3>Женя</h3>
                <img src="/img/paws/looking-for-home.png"/>
              </div>
              <div className={styles.findCarouselCardDescRow}>
                <span>3 года</span>
                <span className={styles.petSex}>М</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.morePetsBtn}>
          <button>Больше питомцев</button>
        </div>

        <div className={styles.donationBlock}>
          <h2>Для пожертвований:</h2>
          <div className={styles.bankCardWrapper}>
            <div className={styles.bankCard}>
              <div className={styles.bankCardNumber}>
                <img src="/img/banking-card-icon.png" alt="банковская карта для пожертвований"/>
                <span>5469 5500 6217 8147</span>
              </div>
              <div className={styles.bankCardBtn}>
                <button>Скопировать номер</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
}