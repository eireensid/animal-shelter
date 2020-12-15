import {useState} from 'react'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/FoundHomeList.module.scss'

export default function FoundHomeList({animals}) {
  const galleryAnimals = animals.slice(0, 12)

  const [animal, setAnimal] = useState(undefined)
  const [age, setAge] = useState(undefined)

  return <>
    <div className={styles.animalsListBlock}>

      <div className={styles.ourPetsGallery}>
        {galleryAnimals.map((animal, index) => (
          <AnimalCard animal={animal} key={index}/>
        ))}
      </div>
    </div>
  </>
}