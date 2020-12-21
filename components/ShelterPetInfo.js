import PawLabel from '~/components/PawLabel'
import SocialBtns from '~/components/SocialBtns'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import useCarousel from '~/hooks/useCarousel'
import styles from '~/styles/components/ShelterPetInfo.module.scss'

export default function ShelterPetInfo({animals}) {
  const router = useRouter()
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(animals, 1)

  const activePet = curItems[0]

  const animal = animals.find(e => e.name === router.query.name) || {}

  const [tellAboutPet, setTellAboutPet] = useState(animal.name)

  const changeTellAboutPet = () => {
    setTellAboutPet(animal.name + 'е')
  }

  useEffect(changeTellAboutPet, [animal]) 
  
  

  return <>
    <div className={styles.shelterPetInfoBlock}>
      <div className={styles.titleBlock}>
        <h2>{animal.name}</h2>
        {/* <PawLabel animals={animals} paw={animal.paw[0]}/> */}
      </div>
      <div>
        {animal.about.map(item => (
          <p>{item}</p>
        ))}
      </div>
    </div>
    <div className={styles.photoDescBlock}>
      <div className={styles.photoCarouselBlock}>
        <div className={styles.galleryPhotosWrapper}>
          <div className={styles.galleryPhotos}>
            <img src={activePet.gallery[0]} alt="питомец"/>
          </div>
          <div onClick={prevSlide} className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}>
            <img src="/img/arrow-left.svg" alt="влево"/>
          </div>
          <div onClick={nextSlide} className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}>
            <img src="/img/arrow-right.svg" alt="вправо"/>
          </div>
        </div>
        <div className={styles.galleryPhotoIndexBlock}>
          <span>{activeIndex + 1} / {curItems.length}</span>
        </div>
      </div>
      <div className={styles.petDescBlock}>
        <div>
          <span>Возраст</span>
          <span> {animal.age}</span>
        </div>
        <div>
          <span>Характер</span>
          <span> {animal.personality}</span>
        </div>
        <div>
          <span>Пол</span>
          <span> {animal.sex}</span>
        </div>
        <div>
          <span>Прививки</span>
          <img src="/img/yes.png"/>
        </div>
        <div>
          <span>Стерилизация</span>
          <img src="/img/yes.png"/>
        </div>
        <div>
          <button>Забрать к себе</button>
        </div>
        <div>
          <span>Расскажи о {tellAboutPet} друзьям</span>
          <SocialBtns/>
        </div>
      </div>
    </div>
  </>
}