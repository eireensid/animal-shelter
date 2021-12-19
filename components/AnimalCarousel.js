import {useEffect, useState} from 'react'
import axios from 'axios'
import useCarousel from '~/hooks/useCarousel'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/AnimalCarousel.module.scss'
import { transformPets } from '~/modules/front/app'

export default function AnimalCarousel({title, status, paw}) {
  const [animals, setAnimals] = useState([])
  const [count, setCount] = useState(3)
  // const [totalPages, setTotalPages] = useState(0)
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(animals, count)
  const [filter, setFilter] = useState(null)

  function setCountByWidth () {
    let count = 3
    if (window.screen.width > 414 && window.screen.width <= 1289) {
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

  useEffect(async () => {
    const res = await axios.post('/api/pet/list', { type: 'shelter', itemCount: 100, pageNum: activeIndex + 1, statuses: [status] })
    // too many items
    setAnimals(res.data.items.map(transformPets))
    // setTotalPages(res.pageCount)
  }, [])


  const doFilter = () => {
    if (filter !== paw) {
      setFilter(paw)
    }
  }

  useEffect(() => {
    doFilter()
  }, [filter])

  const setFilter1 = () => {
    if (filter) {
      localStorage.setItem('currentPaw', filter)
    }
  }

  useEffect(() => {
    setFilter1()
  }, [filter])

  

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