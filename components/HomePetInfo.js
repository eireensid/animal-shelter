import Router from 'next/router'
import PawLabel from '~/components/PawLabel'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import useCarousel from '~/hooks/useCarousel'
import styles from '~/styles/components/HomePetInfo.module.scss'
import EditIcon from '@material-ui/icons/Edit'
import useAdmin from '~/hooks/useAdmin'

export default function HomePetInfo({homePets}) {
  const { isAdmin } = useAdmin()
  const router = useRouter()

  const [pet, setPet] = useState({})
  const getLocalPet = () => {
    let petLocal = JSON.parse(localStorage.getItem('pet'))
    setPet(petLocal)
  }
  console.log('pet', pet)

  useEffect(() => {
    getLocalPet()
  }, [])

  // const animal = homePets.find(e => e.name === router.query.name) || {}
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(pet.gallery && pet.gallery, 1)
  

  return <>
    <div className={styles.shelterPetInfoBlock}>
      <div className={styles.titleBlock}>
        <h2>{pet.name}</h2>
        <PawLabel animals={homePets} paw="heart.png"  disable={true}/>
        {isAdmin && <EditIcon style={{marginLeft: "10px", cursor: "pointer"}} onClick={() => Router.push('/admin/form?id=' + pet.id)} />}
      </div>
      <div>
        {pet.about && pet.about.map((item, index) => (
          <p key={index} className={styles.aboutPetText}>{item}</p>
        ))}
      </div>
    </div>
    <div className={styles.photoDescBlock}>
      <div className={styles.galleryPhotosWrapper}>
        <div className={styles.galleryPhotosArrows}>
          <div onClick={prevSlide} className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}>
            <img src="/img/arrow-left.svg" alt="влево"/>
          </div>

          <div className={styles.galleryPhoto}>
            <div onClick={prevSlide} className={`${styles.carouselArrowMobile} ${styles.carouselArrowLeftMobile}`}>
              <img src="/img/arrow-left.svg" alt="влево"/>
            </div>
            {curItems && curItems.map((a, index) => (
              <img src={a} key={index} alt="питомец"/>
            ))}
            <div onClick={nextSlide} className={`${styles.carouselArrowMobile} ${styles.carouselArrowRightMobile}`}>
              <img src="/img/arrow-right.svg" alt="вправо"/>
            </div>
          </div>

          <div onClick={nextSlide} className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}>
            <img src="/img/arrow-right.svg" alt="вправо"/>
          </div>
        </div>

        <div className={styles.galleryPhotoIndexBlock}>
          <span>{activeIndex + 1} / {pet.gallery && pet.gallery.length}</span>
        </div>
      </div>
      
    </div>
  </>
}