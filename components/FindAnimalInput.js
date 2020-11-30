import styles from '~/styles/components/FindAnimalInput.module.scss'

export default function FindAnimalInput({inputTitle}) {
  return <>
    <div className={styles.animalFilterInput}>
      <h4>{inputTitle}</h4>
      <img src="img/input-arrow-down.png"/>
    </div>
  </>
}