import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import VisitingRules from '~/components/VisitingRules'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/guardianshipAndAdoptation.module.scss'

export default function GuardianshipAndAdoptation({title='Опекунство и адаптация', animals}) {
  const filteredAnimals = animals.filter((animal) => {
    const arr = animal.paw.filter(p => {
      return p === "need-guardian.png"
    })
    return arr.length
  })

  return <MainLayout>
    <section>
      <div className={styles.firstBlock}>
        <div className={styles.firstWrapper}>
          <div className={styles.firstDesc}>
            <div className={styles.breadCrumbsWrapper}>
              <BreadCrumbs title={title}/>
            </div>
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

            <div className={`${styles.aboutGuardianshipGalleryRow} ${styles.aboutGuardianshipGalleryRowReverse}`}>
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

            <div className={`${styles.aboutGuardianshipGalleryRow} ${styles.aboutGuardianshipGalleryRowReverse}`}>
              <div className={styles.aboutGuardianshipGalleryRowTextLeft}>
                <h3>Если я живу в другом городе или просто нет времени приехать?</h3>
                <p>Не все опекуны могут навещать своих подопечных: в таких случаях мы присылаем им «приветы» от питомцев в виде фото и видео, чтобы опекуны 
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

            <div className={styles.whereWeAreBlock}>
              <p className={styles.afterGuardianshipGalleryDesc}>Мы находимся под Гатчиной, к нам без проблем можно добраться как на машине, так и на общественном транспорте. Если вы хотите в ближайшее время 
                попробовать себя в роли опекуна, пишите, мы будем вам очень рады!</p>
              <button className={styles.choosePetBtn}>Выбрать подопечного</button>
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
              <button className={styles.choosePetBtn}>Выбрать подопечного</button>
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
        <AnimalCarousel animals={filteredAnimals} title="Им нужен опекун:" paw="need-guardian.png"/>
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