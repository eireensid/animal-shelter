import styles from '~/styles/components/AnimalCard.module.scss'
import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function AnimalCard({animal, filter, parent}) {
  if (!animal) return <>
    <div className={styles.findCarouselCard} style={{ opacity: 0 }}></div>
  </>
  const {photo, name, paw, age, sex} = animal

  const [lastRowVisibility, setLastRowVisibility] = useState({visibility: "visible"})

  const lastRowShow = () => {
    if (parent === "home") {
      setLastRowVisibility({visibility: "hidden"})
    } 
  }

  useEffect(lastRowShow, [])

  // useEffect(() => {
  //   saveLocalPet()
  // }, [animal])

  let linkHref = { pathname: '/pets/[name]', query: { name: name }}

  if (parent === "home") {
    linkHref = { pathname: '/hellos-from-homes/[name]', query: { name: name }}
  }

  let pawSrc = ""

  if (parent !== "home") {
    let curPaw = paw && paw[0]
    if (paw && paw.includes(filter)) {
      curPaw = filter
    }
    pawSrc = `/img/paws/${curPaw}`
  } else if (parent === "home") {
    pawSrc = '/img/paws/heart.png'
  }

  
  // save to local
  const saveLocalPet = () => { 
    localStorage.setItem('pet', JSON.stringify(animal))
  }
  // const getLocalPet = () => {
  //   if (localStorage.getItem('pet') === null) {
  //     localStorage.setItem('pet', JSON.stringify([]))
  //   } else {
  //     let petLocal = JSON.parse(localStorage.getItem('pet'))
  //     setPet(petLocal)
  //   }
  // }

  return <>
    <Link href={linkHref}>
      <div onClick={saveLocalPet} className={styles.findCarouselCard}>
        <div className={styles.petImgBlock}>
          <img className={styles.petImg} src={photo} alt="питомец"/>
        </div>
        <div className={styles.findCarouselCardDesc}>
          <div className={styles.findCarouselCardDescRow}>
            <h3>{name}</h3>
            <img src={pawSrc}/>
          </div>
          <div style={lastRowVisibility} className={styles.findCarouselCardDescRow}>
            <span>{age}</span>
            <span className={styles.petSex}>{sex}</span>
          </div>
        </div>
      </div>
    </Link>
  </>
}