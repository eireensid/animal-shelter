import styles from '~/styles/components/AnimalCard.module.scss'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'

function AnimalCard({animal, filter, parent, scrollPosition}) {
  if (!animal) return <>
    <div className={styles.findCarouselCard} style={{ opacity: 0 }}></div>
  </>
  const {id, photo, name, paw, age, sex} = animal
  const [photoSrc, setPhotoSrc] = useState('')

  const [lastRowVisibility, setLastRowVisibility] = useState({visibility: "visible"})

  const lastRowShow = () => {
    if (parent === "home") {
      setLastRowVisibility({visibility: "hidden"})
    } 
  }

  useEffect(lastRowShow, [])

  useEffect(() => {
    process.nextTick(() => {
      setPhotoSrc(photo)
    })

    return () => {
      setPhotoSrc('')
    }
  }, [photo])

  let photoWidth = 270
  let photoHeight = 270
  if (screen.width <= 1289) {
    photoWidth = 200
    photoHeight = 200
  } 

  let linkHref = { pathname: '/pets/[name]', query: { name: name }}

  if (parent === "home") {
    linkHref = { pathname: '/hellos-from-homes/[name]', query: { name: name }}
  }

  let pawSrc = ""

  if (parent !== "home") {
    let curPaw = paw ? paw[0] : ''
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
    if (!filter && animal.paw) {
      localStorage.setItem('currentPaw', animal.paw[0])
    }
    document.dispatchEvent(new Event('change-storage-pet'))
  }


  return <>
    <Link href={linkHref}>
      <div onClick={saveLocalPet} className={styles.findCarouselCard}>
        <div className={styles.petImgBlock}>
          <LazyLoadImage
            scrollPosition={scrollPosition}
            effect="blur"
            alt={name}
            src={photoSrc} width={photoWidth} height={photoHeight} />
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

export default trackWindowScroll(AnimalCard)