import {useState} from 'react'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/AnimalCarousel.module.scss'

export default function AnimalCarousel({animals}) {

  const len = animals.length - 1
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
  }
  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    console.log(activeIndex)
  }

  return <>
    <div className={styles.findCarouselCard}>
      <h2 className={styles.findHomeTitle}>Сейчас ищут дом:</h2>
      <div className={styles.findCarouselBlock}>
        <div onClick={prevSlide} className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        {animals.map((animal, index) => (
          <AnimalCard name={animal.name} paw={animal.paw} age={animal.age} sex={animal.sex} photo={animal.photo} key={index}/>
        ))}
        <div onClick={nextSlide} className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
    </div>
  </>
}