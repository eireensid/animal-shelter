import styles from '~/styles/components/AnimalCard.module.scss'
import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function AnimalCard({animal, parent}) {
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

  return <>
    <Link href={{
              pathname: '/pets/[name]',
              query: { name: name },
            }}>
      <div className={styles.findCarouselCard}>
        <div className={styles.petImgBlock}>
          <img className={styles.petImg} src={photo} alt="питомец"/>
        </div>
        <div className={styles.findCarouselCardDesc}>
          <div className={styles.findCarouselCardDescRow}>
            <h3>{name}</h3>
            <img src={`/img/paws/${paw}`}/>
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