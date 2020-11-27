import styles from '~/styles/components/SearchInput.module.scss'

export default function SearchInput() {
  return <>
    <div className={styles.searchInput}>
      <img src="img/search-icon.png"/>
      <input type="text" placeholder="Имя питомца"/>
    </div>
  </>
}