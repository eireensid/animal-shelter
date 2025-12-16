import {useRouter} from 'next/router'
import Router from 'next/router'
import {useState, useEffect} from 'react'
import {MainLayout} from '~/components/MainLayout'
import BreadCrumbs from '~/components/BreadCrumbs'
import ShelterPetInfo from '~/components/ShelterPetInfo'
import AnimalCarousel from '~/components/AnimalCarousel'
import BankCard from '~/components/BankCard'
import styles from '~/styles/pet.module.scss'

export default function Pet({animals}) {
  const router = useRouter()

  const filteredAnimals = animals.filter((animal) => {
    const arr = animal.paw.filter(p => {
      return p === "looking-for-home.png"
    })
    return arr.length
  })

  const [pet, setPet] = useState({})
  const [paw, setPaw] = useState()

  const setStateByLocalStorage = () => {
    let petLocal = JSON.parse(localStorage.getItem('pet'))
    setPet(petLocal)
    let petPaw = localStorage.getItem('currentPaw')
    setPaw(petPaw)
    console.log('setStateByLocalStorage petPaw', petPaw)
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

  return <MainLayout title='Питомцы'>
    <section>
      <div className={`${styles.petInfoBlock} ${styles.pagePaddings}`}>
        <div className={styles.breadCrumbsWrapper}>
          {router.query.name && petType && petPaw && <BreadCrumbs title={"Питомцы / "} petPaw={petPaw + " / "} petType={petType + " / "}/>}
        </div>
        <div>
          <ShelterPetInfo animals={animals} pet={pet} paw={paw}/>
        </div>
        <div className={styles.walkingsBlock}>
          <p>Также вы можете прийти к питомцу в гости, принести ему вкусняшку или выйти на прогулку. Подробнее о прогулках и посещении приюта можно прочитать здесь:</p>
          <button onClick={() => Router.push('/walks-with-dogs').then(() => window.scrollTo(0, 0))} className={styles.aboutWalkingsBtn}>Подробнее</button>
        </div>
      </div>
    </section>
    <section>
      <div className={`${styles.animalCarouselWrapper} ${styles.pagePaddings}`}>
        <AnimalCarousel animals={filteredAnimals} title="Сейчас ищут дом:" paw="looking-for-home.png"/>
      </div>
    </section>
    <section className={styles.bankCardWrapperSection}>
      <div className={`${styles.bankCardWrapper} ${styles.pagePaddings}`}>
        <h2>Для пожертвований:</h2>
        <BankCard/>
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