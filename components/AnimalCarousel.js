import {useState} from 'react'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/AnimalCarousel.module.scss'

export default function AnimalCarousel({animals}) {

  // const [animals, setAnimals] = useState([
  //   {name: "Миша", age: "10 лет", sex: "М", photo: "Misha.png"},
  //   {name: "Китти", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  //   {name: "Женя", age: "3 года", sex: "М", photo: "Zhenya.png"}
  // ])

  return <>
    <div className={styles.findCarouselCard}>
      <h2 className={styles.findHomeTitle}>Сейчас ищут дом:</h2>
      <div className={styles.findCarouselBlock}>
        <div className={`${styles.findCarouselArrowLeft} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        {animals.map((animal, index) => (
          <AnimalCard name={animal.name} age={animal.age} sex={animal.sex} photo={animal.photo} key={index}/>
        ))}
        <div className={`${styles.findCarouselArrowRight} ${styles.findCarouselArrow}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
    </div>
  </>
}