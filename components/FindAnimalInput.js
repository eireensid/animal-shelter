import styles from '~/styles/components/FindAnimalInput.module.scss'

export default function FindAnimalInput() {
  return <>
    <div className={styles.animalFilterInput}>
      <h4>Все животные</h4>
      <img src="img/input-arrow-down.png"/>
    </div>
  </>
}