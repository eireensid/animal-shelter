import {useState} from 'react'
import useCarousel from '~/hooks/useCarousel'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/AnimalCarousel.module.scss'

export default function AnimalCarousel({animals, animalCarouselTitle}) {
  const { curItems, prevSlide, nextSlide } = useCarousel(animals, 3)

  return <>
    <div className={styles.findCarouselCard}>
      <h2 className={styles.findHomeTitle}>{animalCarouselTitle}</h2>
      <div className={styles.findCarouselBlock}>
        <div onClick={prevSlide} className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        {curItems.map((animal, index) => (
          <AnimalCard animal={animal} key={index}/>
        ))}
        <div onClick={nextSlide} className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
    </div>
  </>
}