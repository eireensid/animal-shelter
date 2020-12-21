import {useEffect, useState} from 'react'
import useCarousel from '~/hooks/useCarousel'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/AnimalCarousel.module.scss'

export default function AnimalCarousel({animals, title}) {
  const [count, setCount] = useState(3)
  const { curItems, prevSlide, nextSlide } = useCarousel(animals, count)
  const [filter, setFilter] = useState(null)

  function setCountByWidth () {
    let count = 3
    if (window.screen.width > 414 && window.screen.width <= 1200) {
      count = 2 
    }
    setCount(count)
  }

  useEffect(() => {
    setCountByWidth()
    window.addEventListener('resize', setCountByWidth)
    return () => {
      window.removeEventListener('resize', setCountByWidth)
    }
  }, [])

  

  return <>
    <div className={styles.findCarouselCard}>
      <h2 className={styles.findHomeTitle}>{title}</h2>
      <div className={styles.findCarouselBlock}>
        <div onClick={prevSlide} className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        {curItems.map((animal, index) => (
          <AnimalCard parent="shelter" filter={filter} animal={animal} key={index}/>
        ))}
        <div onClick={nextSlide} className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
    </div>
  </>
}