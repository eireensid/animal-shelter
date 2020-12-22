import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/FoundHomeList.module.scss'

export default function FoundHomeList({pets}) {
  return <>
    <div className={styles.animalsListBlock}>

      <div className={styles.ourPetsGallery}>
        {pets.map((animal, index) => (
          <div key={index}>
            <AnimalCard parent="home" animal={animal}/>
          </div>
        ))}
      </div>
    </div>
  </>
}