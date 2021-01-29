import {MainLayout} from '~/components/MainLayout'
import {useState, useEffect} from 'react'
import BreadCrumbs from '~/components/BreadCrumbs'
import PawLabel from '~/components/PawLabel'
import CallWriteBtns from '~/components/CallWriteBtns'
import styles from '~/styles/takeThePet.module.scss'

export default function TakeThePet({animals}) {

  const [pet, setPet] = useState({})
  const [paw, setPaw] = useState()

  const setStateByLocalStorage = () => {
    let petLocal = JSON.parse(localStorage.getItem('pet'))
    setPet(petLocal)
    let petPaw = localStorage.getItem('currentPaw')
    setPaw(petPaw)
  }

  const [petType, setPetType] = useState(pet.type)
  const breadCrumbsPetType = () => {
    if (pet.type === "cat") {
      setPetType("Кошки")
    } else if (pet.type === "dog") {
      setPetType("Собаки")
    }
  }
  const [petPaw, setPetPaw] = useState(paw)
  const breadCrumbsPetPaw = () => {
    if (paw === "looking-for-home.png") {
      setPetPaw("Ищут дом")
    } else if (paw === "need-adoptation.png") {
      setPetPaw("Нужна адаптация")
    } else if (paw === "need-guardian.png") {
      setPetPaw("Нужен опекун")
    } else if (paw === "undergo-treatment.png") {
      setPetPaw("Проходят лечение")
    } else if (paw === "baby-pets.png") {
      setPetPaw("Малыши")
    }
  }

  useEffect(() => {
    setStateByLocalStorage()
    document.addEventListener('change-storage-pet', setStateByLocalStorage)
    
    return () => {
      document.removeEventListener('change-storage-pet', setStateByLocalStorage)
    }
  }, [])

  useEffect(() => {
    breadCrumbsPetType()
  }, [pet])
  useEffect(() => {
    breadCrumbsPetPaw()
  }, [paw])


  return <MainLayout>
    <section>
      <div className={styles.aboutPetBlock}>
        {petType && petPaw && pet.name && <BreadCrumbs title={"Питомцы / "} petPaw={petPaw + " / "} petType={petType + " / "} petName={pet.name} take=" / Забрать себе"/>}
        <div className={styles.aboutPetWrapper}>   
          <img className={styles.petPhoto} src={pet.photo} alt="питомец"/>
          <div className={styles.nameLabelWrapper}>
            <h2 className={styles.petName}>{pet.name}</h2>         
            <PawLabel animals={animals} paw={paw} disable={true}/>
          </div>
        </div>
      </div>
    </section>
    
    <section className={styles.takeThePetWrapperSection}>
      <div className={`${styles.takeThePetWrapper} ${styles.pagePaddings}`}>
        <p>Для того, что бы забрать питомца, свяжитесь с нами удобным способом:</p>
        <CallWriteBtns/>
      </div>
      <svg className={styles.waveDesktop} viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M848.411 95.4772C629.058 70.6965 450.479 -28.8145 221.037 8.13269C105.85 26.6814 58.8155 59.5476 0.200227 95.551L0.184691 253.285L1444.17 253.16L1444.19 30.473C1320.11 -28.8791 1035.12 116.57 848.411 95.4772Z" fill="#FFC393"/>
      </svg>
      <svg className={styles.waveTablet} viewBox="0 0 768 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M552.395 157.261C357.504 133.91 194.806 47.9331 0.0122231 56.5781L-0.0400326 324.797L767.936 324.648L767.973 133.971C691.53 151.895 616.219 164.908 552.395 157.261Z" fill="#FFC393"/>
      </svg>
      <svg className={styles.waveMobile} viewBox="0 0 320 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M199.367 70.208C128.68 61.7028 65.1238 39.2865 -0.000403353 24.2984L-0.000388884 169.869L320 169.869L320 58.071C277.157 67.8307 235.212 74.5209 199.367 70.208Z" fill="#FFC393"/>
      </svg>
    </section>
  </MainLayout>
}