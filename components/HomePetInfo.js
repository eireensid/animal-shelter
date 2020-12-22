import Router from 'next/router'
import PawLabel from '~/components/PawLabel'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import useCarousel from '~/hooks/useCarousel'
import styles from '~/styles/components/HomePetInfo.module.scss'

export default function HomePetInfo({homePets}) {
  const router = useRouter()

  const animal = homePets.find(e => e.name === router.query.name) || {}
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(animal.gallery, 1)

  const [tellAboutPet, setTellAboutPet] = useState(animal.name)

  const changeTellAboutPet = () => {
    const lastChar = animal.name.charAt(animal.name.length-1)
    let remName = animal.name
    if (lastChar === 'а' || lastChar === 'я' || lastChar === 'о' || lastChar === 'е' || lastChar === 'у' || lastChar === 'ю' || lastChar === 'и' || lastChar === 'э') {
      remName = animal.name.slice(0, -1)
    }
    setTellAboutPet(remName + 'е')
  }

  useEffect(changeTellAboutPet, [animal]) 
  
  // animals = curItems

  return <>
    <div className={styles.shelterPetInfoBlock}>
      <div className={styles.titleBlock}>
        <h2>{animal.name}</h2>
        {/* <PawLabel animals={homePets} paw={animal.paw[0]}/> */}
      </div>
      <div>
        {animal.about.map(item => (
          <p className={styles.aboutPetText}>{item}</p>
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
              {curItems.map((a, index) => (
                <img src={a} key={index} alt="питомец"/>
              ))}
              </div>
              <div onClick={nextSlide} className={`${styles.carouselArrowTablet} ${styles.carouselArrowRightTablet}`}>
                <img src="/img/arrow-right.svg" alt="вправо"/>
              </div>
            </div>

            <div className={styles.galleryPhotoIndexBlock}>
              <span>{activeIndex + 1} / {animal.gallery.length}</span>
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
      
    </div>
  </>
}