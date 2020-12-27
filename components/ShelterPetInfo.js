import Router from 'next/router'
import PawLabel from '~/components/PawLabel'
import SocialBtns from '~/components/SocialBtns'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import useCarousel from '~/hooks/useCarousel'
import styles from '~/styles/components/ShelterPetInfo.module.scss'

export default function ShelterPetInfo({animals}) {
  const router = useRouter()

  const [pet, setPet] = useState({})
  const [paw, setPaw] = useState()

  const setStateByLocalStorage = () => {
    let petLocal = JSON.parse(localStorage.getItem('pet'))
    setPet(petLocal)
    let petPaw = localStorage.getItem('currentPaw')
    setPaw(petPaw)
  }

  useEffect(() => {
    setStateByLocalStorage()
    document.addEventListener('change-storage-pet', setStateByLocalStorage)
    return () => {
      document.removeEventListener('change-storage-pet', setStateByLocalStorage)
    }
  }, [])

  // const animal = animals.find(e => e.name === router.query.name) || {}
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(pet.gallery && pet.gallery, 1)

  const [tellAboutPet, setTellAboutPet] = useState(pet.name)

  const changeTellAboutPet = () => {
    const lastChar = pet.name && pet.name.charAt(pet.name.length-1)
    let remName = pet.name
    if (lastChar === 'а' || lastChar === 'я' || lastChar === 'о' || lastChar === 'е' || lastChar === 'у' || lastChar === 'ю' || lastChar === 'и' || lastChar === 'э') {
      remName = pet.name.slice(0, -1)
    }
    setTellAboutPet(remName + 'е')
  }

  useEffect(changeTellAboutPet, [pet]) 


  return <>
    <div className={styles.shelterPetInfoBlock}>
      <div className={styles.titleBlock}>
        <h2>{pet.name}</h2>
        <PawLabel animals={animals} paw={paw} disable={true}/>
      </div>
      <div>
        {pet.about && pet.about.map((item, index) => (
          <p key={index} className={styles.aboutPetText}>{item}</p>
        ))}
      </div>
    </div>
    <div className={styles.photoDescBlock}>
      <div className={styles.photoCarouselBlock}>
        <div className={styles.galleryPhotosWrapper}>
          <div className={styles.galleryPhotos}>
            <div className={styles.galleryPhotosTablet}>
              <div onClick={prevSlide} className={`${styles.carouselArrowTablet} ${styles.carouselArrowLeftTablet}`}>
                <img src="/img/arrow-left.svg" alt="влево"/>
              </div>
              <div className={styles.galleryPhoto}>
              {curItems && curItems.map((a, index) => (
                <img src={a} key={index} alt="питомец"/>
              ))}
              </div>
              <div onClick={nextSlide} className={`${styles.carouselArrowTablet} ${styles.carouselArrowRightTablet}`}>
                <img src="/img/arrow-right.svg" alt="вправо"/>
              </div>
            </div>

            <div className={styles.galleryPhotoIndexBlock}>
              <span>{activeIndex + 1} / {pet.gallery && pet.gallery.length}</span>
            </div>
          </div>
          <div onClick={prevSlide} className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}>
            <img src="/img/arrow-left.svg" alt="влево"/>
          </div>
          <div onClick={nextSlide} className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}>
            <img src="/img/arrow-right.svg" alt="вправо"/>
          </div>
        </div>
        
      </div>
      
      <div className={styles.petDescBlock}>
        <div className={styles.petDescRow}>
          <span>Возраст</span>
          <span className={styles.petInfo}> {pet.age}</span>
        </div>
        <div className={styles.petDescRow}>
          <span>Характер</span>
          <span className={styles.petInfo}> {pet.personality}</span>
        </div>
        <div className={styles.petDescRow}>
          <span>Пол</span>
          <span className={styles.petInfo}> {pet.sex}</span>
        </div>
        <div className={styles.petDescRow}>
          <span>Прививки</span>
          <img src="/img/yes.png"/>
        </div>
        <div className={styles.petDescRow}>
          <span>Стерилизация</span>
          <img src="/img/yes.png"/>
        </div>
        <button onClick={() => Router.push('/take-the-pet').then(() => window.scrollTo(0, 0))} className={styles.takePet}>Забрать к себе</button>
        <div className={styles.petDescRow}>
          <span className={styles.tellAboutPetText}>Расскажи о {tellAboutPet} друзьям</span>
        </div>
        <div className={styles.socialsWrapper}>
          <SocialBtns/>
        </div>
      </div>
    </div>
  </>
}