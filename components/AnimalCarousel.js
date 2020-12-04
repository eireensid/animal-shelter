import {useState, useEffect} from 'react'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/AnimalCarousel.module.scss'

export default function AnimalCarousel({animals}) {
  const cardCount = 3
  const len = Math.ceil(animals.length / cardCount) - 1
  // console.log('len', len)
  const [activeIndex, setActiveIndex] = useState(0)
  const [curAnimals, setCurAnimals] = useState(animals.slice(0, cardCount))

  useEffect(() => {
    const startIndex = activeIndex * cardCount
    let endIndex = startIndex + cardCount
    if (endIndex > animals.length - 1) {
      endIndex = animals.length
    }
    const newCurAnimals = animals.slice(startIndex, endIndex)
    setCurAnimals(newCurAnimals)
    // console.log('newCurAnimals', newCurAnimals, 'startIndex', startIndex, 'endIndex', endIndex)
  }, [activeIndex])

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
    // console.log('activeIndex', activeIndex)
  }
  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    // console.log('activeIndex', activeIndex)
  }

  return <>
    <div className={styles.findCarouselCard}>
      <h2 className={styles.findHomeTitle}>Сейчас ищут дом:</h2>
      <div className={styles.findCarouselBlock}>
        <div onClick={prevSlide} className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        {curAnimals.map((animal, index) => (
          <AnimalCard name={animal.name} paw={animal.paw} age={animal.age} sex={animal.sex} photo={animal.photo} key={index}/>
        ))}
        <div onClick={nextSlide} className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
    </div>
  </>
}