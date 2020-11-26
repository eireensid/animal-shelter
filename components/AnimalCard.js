import styles from '~/styles/components/AnimalCard.module.scss'

export default function AnimalCard({name, age, sex, photo}) {
  return <>
    <div className={styles.findCarouselCard}>
      <div className={styles.petImgBlock}>
        <img className={styles.petImg} src={`/img/${photo}`} alt="питомец"/>
      </div>
      <div className={styles.findCarouselCardDesc}>
        <div className={styles.findCarouselCardDescRow}>
          <h3>{name}</h3>
          <img src="/img/paws/looking-for-home.png"/>
        </div>
        <div className={styles.findCarouselCardDescRow}>
          <span>{age}</span>
          <span className={styles.petSex}>{sex}</span>
        </div>
      </div>
    </div>
  </>
}