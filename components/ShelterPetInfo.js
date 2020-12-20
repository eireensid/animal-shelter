import PawLabel from '~/components/PawLabel'
import SocialBtns from '~/components/SocialBtns'
// import {useState} from 'react'
// import AnimalCard from '~/components/AnimalCard'
import {useRouter} from 'next/router'
import useCarousel from '~/hooks/useCarousel'
import styles from '~/styles/components/ShelterPetInfo.module.scss'

export default function ShelterPetInfo({animals}) {
  const router = useRouter()
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(animals, 1)

  const animal = animals.find(e => e.name === router.query.name) || {}
  

  return <>
    <div className={styles.shelterPetInfoBlock}>
      <div className={styles.titleBlock}>
        <h2>{animal.name}</h2>
        <PawLabel animals={animals} paw={animal.paw} pawMeaning="Ищут дом"/>
      </div>
      <p>
      Трогательное, мягкое и ласковое существо. Собачка среднего размера с густой шёрсткой и красивыми грустными глазками.<br/>
      Девочке около 5 лет. Надюша доверчивая и очень нежная, ведёт себя прекрасно, внимательно относится к командам и очень послушна, отлично ходит на поводке. А ещё Надюша — великолепная охранница!<br/>
      Девочка здоровая, у нее есть опекун, но она мечтает о доме. Пусть вас не обманывают её опущенные ушки, Надюше комфортно и хорошо с человеком
      </p>
    </div>
    <div className={styles.photoDescBlock}>
      <div className={styles.photoCarouselBlock}>
        <div className={styles.visitingRulesCard}>
          {/* <img src={`/img/visiting-rules/${activeRule.ruleImg}`} alt="фото"/> */}
          <div onClick={prevSlide} className={`${styles.findCarouselArrow} ${styles.findCarouselArrowLeft}`}>
            <img src="/img/arrow-left.svg" alt="влево"/>
          </div>
          <div onClick={nextSlide} className={`${styles.findCarouselArrow} ${styles.findCarouselArrowRight}`}>
            <img src="/img/arrow-right.svg" alt="вправо"/>
          </div>
        </div>
        {/* <div className={styles.visitingRulesRounds}>
          {visitingRules.map((rule, index) => (
            <div className={getRoundClasses(index)} key={index}></div>
          ))}
        </div> */}
      </div>
      <div className={styles.petDescBlock}>
        <div>
          <span>Возраст</span>
          <span> {animal.age}</span>
        </div>
        <div>
          <span>Характер</span>
          <span>Охранница</span>
        </div>
        <div>
          <span>Пол</span>
          <span> {animal.sex}</span>
        </div>
        <div>
          <span>Прививки</span>
          <img src="/img/yes.png"/>
        </div>
        <div>
          <span>Стерилизация</span>
          <img src="/img/yes.png"/>
        </div>
        <div>
          <button>Забрать к себе</button>
        </div>
        <div>
          <span>Расскажи о {animal.name} друзьям</span>
          <SocialBtns/>
        </div>
      </div>
    </div>
  </>
}