import Router from 'next/router'
import {useState} from 'react'
import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/guardianshipAndAdoptation.module.scss'

export default function GuardianshipAndAdoptation({title='Опекунство и адаптация'}) {
  const [animals, setAnimals] = useState([
    {name: "Миша", age: "10 лет", sex: "М", photo: "Misha.png"},
    {name: "Китти", age: "4 года", sex: "Ж", photo: "Kitty.png"},
    {name: "Женя", age: "3 года", sex: "М", photo: "Zhenya.png"}
  ])
  return <MainLayout>
    <section>
      <div className={styles.guardianshipAdoptationBlock}>
        <BreadCrumbs title={title}/>
        <div className={styles.guardianshipAdoptationWrapper}>
          <div className={styles.guardianshipAdoptationDesc}>
            <h2>{title}</h2>
            <p>Питомцы Теремка сильно нуждаются в человеческом внимании и заботе. Многие живут здесь годами и могут совсем зачахнуть без ласки, 
              прогулок и общения с человеком хотя бы раз в неделю. Решайтесь, станьте опекуном одного из питомцев! Или помогите адаптироваться пугляшу.</p>
          </div>
          <div className={styles.photoWithPhraseBubbleWrapper}>
            <img className={styles.photoWithPhraseBubble} src="/img/guardianshipPage/guardianship-dog-with-bubble.svg" alt="спасибо"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className={`${styles.aboutGuardianshipAdoptationBlocks} ${styles.pagePaddings}`}>
       <div className={styles.aboutGuardianshipBlock}>
          <h2>Опекунство</h2>
          <p className={styles.aboutGuardianshipBlockDesc}>Приют очень сильно нуждается в опекунах! Если у вас нет возможности забрать животное, но очень хочется окружить его заботой и вниманием, 
            станьте опекуном (временным хозяином), навещайте питомца в приюте и не дайте его взгляду потухнуть без человеческого внимания.</p>
          <div className={styles.aboutGuardianshipGallery}>
            <div className={styles.aboutGuardianshipGalleryRow}>
              <img src="/img/guardianshipPage/who-is-guardian.png" alt="опекун"/>
              <div className={styles.aboutGuardianshipGalleryRowTextRight}>
                <h3>Кто такой опекун?</h3>
                <p>Опекун - это лучший друг и самый важный человек для приютской собаки. Временный хозяин, который навещает собаку, дарит ей эмоции, свою любовь, 
                  не даёт потерять надежду и почувствовать себя ненужной.</p>
                <p>Это очень важно, ведь многие из них годами живут в приюте, прежде чем попасть в 
                любящую семью. Поэтому каждому приютскому хвостику необходим свой опекун, который будет время от времени его навещать.</p>
              </div>
            </div>

            <div className={styles.aboutGuardianshipGalleryRow}>
              <div className={styles.aboutGuardianshipGalleryRowTextLeft}>
                <h3>Что нужно делать?</h3>
                <p>Вместе вы будете гулять, общаться, обниматься, учить новые команды, обмениваться позитивными эмоциями.</p>
                <br/>
                <p>Также опекуны очень сильно помогают приюту финансово: они вносят ежемесячно от 500 рублей на своего питомца. Так как опекунов достаточно 
                  много, для приюта это очень значимая сумма, особенно в такое время, как сейчас.</p>
              </div>
              <img src="/img/guardianshipPage/what-need-to-do.png" alt="порядок действий"/>
            </div>

            <div className={styles.aboutGuardianshipGalleryRow}>
              <img src="/img/guardianshipPage/why-this-is-important.png" alt="почему это важно"/>
              <div className={styles.aboutGuardianshipGalleryRowTextRight}>
                <h3>Почему это так важно?</h3>
                <p>Питомцы всегда нуждаются в общении с людьми, им нужно чувствовать любовь и заботу. Самое главное - очень многие наши питомцы обрели хозяев 
                  благодаря внимательным опекунам, которые делали всё для их пристройства в хорошие руки и добились цели.</p>
              </div>
            </div>

            <div className={styles.aboutGuardianshipGalleryRow}>
              <div className={styles.aboutGuardianshipGalleryRowTextLeft}>
                <h3>Если я живу в другом городе или просто нет времени приехать?</h3>
                <p>Не все опекуны могут навещать своих подопечных:<br/> в таких случаях мы присылаем им «приветы»<br/> от питомцев в виде фото и видео, чтобы опекуны 
                  могли убедиться, что у их животных всё хорошо. </p>
              </div>
              <img src="/img/guardianshipPage/if-live-far.png" alt="нет времени приехать"/>
            </div>

            <div className={styles.aboutGuardianshipGalleryRow}>
              <img src="/img/guardianshipPage/cat-guardian.png" alt="опекун кошки"/>
              <div className={styles.aboutGuardianshipGalleryRowTextRight}>
                <h3>Могу ли я стать опекуном кошки?</h3>
                <p>Под опеку также можно и нужно брать и котов, им тоже необходимо общение с человеком.</p>
              </div>
            </div>

            <div>
              <p className={styles.afterGuardianshipGalleryDesc}>Мы находимся под Гатчиной, к нам без проблем можно добраться как на машине, так и на общественном транспорте. Если вы хотите в ближайшее время 
                попробовать себя в роли опекуна, пишите, мы будем вам очень рады!</p>
              <button>Выбрать подопечного</button>
            </div>
          </div>
        </div>

        <div className={styles.aboutAdaptationBlock}>
          <h2>Помощь в адаптации</h2>
          <div className={styles.aboutAdaptationBlockDesc}>
            <img src="/img/guardianshipPage/help-with-adoptation.png" alt="об адаптации"/>
            <div className={styles.aboutAdaptationBlockText}>
              <p>В приюте есть «трудные», неконтактные питомцы. Они не хотят выходить за пределы будки и боятся человека, но они так же, как и другие собаки, 
                нуждаются в общении с людьми.</p>
              <p>На каждого такого грустного собакена должен найтись терпеливый человек, который своим вниманием и заботой растопит сердце дикого пёсика, 
                поможет ему радоваться и жить полноценной жизнью. </p>
              <p>А когда вы увидите чудесное превращение запуганной собаки в счастливую и жизнерадостную, вы ощутите всю значимость своей помощи и сами станете 
                ещё счастливее.</p>
              <button>Выбрать подопечного</button>
            </div>
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