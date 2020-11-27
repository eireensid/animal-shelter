import styles from '~/styles/components/PawLabel.module.scss'

export default function PawLabel({pawColor, pawMeaning}) {
  return <>
    <div className={styles.animalFilter}>
      <img src={`${pawColor}`}/>
      <h4>{pawMeaning}</h4>
    </div>
  </>
}