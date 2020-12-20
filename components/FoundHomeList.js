import {useState} from 'react'
import AnimalCard from '~/components/AnimalCard'
import styles from '~/styles/components/FoundHomeList.module.scss'

export default function FoundHomeList({animalsArr}) {
  console.log('animalsArr', animalsArr)
  return <>
    <div className={styles.animalsListBlock}>

      <div className={styles.ourPetsGallery}>
        {animalsArr.map((animal, index) => (
          <div key={index}>
            <div style={{whiteSpace: "pre-wrap"}}>{animal.about}</div>
            <AnimalCard parent="home" animal={animal}/>
          </div>
        ))}
      </div>
    </div>
  </>
}