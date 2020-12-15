import {useState} from 'react'
import AnimalCard from '~/components/AnimalCard'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import styles from '~/styles/components/AnimalsList.module.scss'

export default function AnimalsList({animals}) {
  const galleryAnimals = animals.slice(0, 12)

  const [animal, setAnimal] = useState(undefined)
  const [age, setAge] = useState(undefined)

  return <>
    <div className={styles.animalsListBlock}>
      <div className={styles.animalFiltersBlock}>
        <div className={styles.animalInputsBlock}>
          <div className={styles.findAnimalInputBlock}>
            <FindAnimalInput placeholder="Все животные" value={animal} options={["Кошки", "Собаки"]} onChange={v => setAnimal(v)}/>
            <FindAnimalInput placeholder="Все возраста" value={age} options={["до 6 мес.", "6 мес. - 1 год", "1-3 года", "3-7 лет", "от 7 лет"]} onChange={v => setAge(v)}/>
          </div>
          <SearchInput/>
        </div>
        <div className={styles.animalFilterWrapper}>
          <div className={styles.animalFilterWrapperTop}>            
            <PawLabel pawColor="/img/paws/looking-for-home.png" pawMeaning="Ищут дом"/>
            <PawLabel pawColor="/img/paws/need-adoptation.png" pawMeaning="Нужна адаптация"/>
            <PawLabel pawColor="/img/paws/baby-pets.png" pawMeaning="Малыши"/>
          </div>
          <div className={styles.animalFilterWrapperBottom}>
            <PawLabel pawColor="/img/paws/need-guardian.png" pawMeaning="Нужен опекун"/>
            <PawLabel pawColor="/img/paws/undergo-treatment.png" pawMeaning="Проходят лечение"/>
          </div>
        </div>
        <div className={styles.animalFilterWrapperMobile}>
          <div className={styles.animalFilterWrapperTopMobile}>            
            <PawLabel pawColor="/img/paws/looking-for-home.png" pawMeaning="Ищут дом"/>
            <PawLabel pawColor="/img/paws/need-adoptation.png" pawMeaning="Нужна адаптация"/>
          </div>
          <div className={styles.animalFilterWrapperMiddleMobile}>
            <PawLabel pawColor="/img/paws/need-guardian.png" pawMeaning="Нужен опекун"/>
            <PawLabel pawColor="/img/paws/baby-pets.png" pawMeaning="Малыши"/>
          </div>
          <div className={styles.animalFilterWrapperBottomMobile}>
            <PawLabel pawColor="/img/paws/undergo-treatment.png" pawMeaning="Проходят лечение"/>
          </div>
        </div>
      </div>

      <div className={styles.ourPetsGallery}>
        {galleryAnimals.map((animal, index) => (
          <AnimalCard animal={animal} key={index}/>
        ))}
      </div>
    </div>
  </>
}