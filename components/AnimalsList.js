import AnimalCard from '~/components/AnimalCard'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import styles from '~/styles/components/AnimalsList.module.scss'

export default function AnimalsList({animals}) {
  const galleryAnimals = animals.slice(0, 12)
  return <>
    <div className={styles.animalsListBlock}>
      <div className={styles.animalFiltersBlock}>
        <div className={styles.animalInputsBlock}>
          <FindAnimalInput inputTitle="Все животные"/>
          <FindAnimalInput inputTitle="Все возраста"/>
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
      </div>

      <div className={styles.ourPetsGallery}>
        {galleryAnimals.map((animal, index) => (
          <AnimalCard animal={animal} key={index}/>
        ))}
      </div>
    </div>
  </>
}