// import AnimalsList from '~/components/AnimalsList'
import styles from '~/styles/components/Pagination.module.scss'

export default function Pagination({animals}) {
  const galleryAnimals = animals.slice(0, 12)
  return <>
    <div className={styles.PaginationBlock}>
      <div className={styles.paginationPages}>
        <img src="/img/pagination-arrow-left.svg" alt="влево"/>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>30</span>
        <img src="/img/pagination-arrow-right.svg" alt="вправо"/>
      </div>
    </div>
  </>
}