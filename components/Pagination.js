import styles from '~/styles/components/Pagination.module.scss'
import { usePagination } from '@material-ui/lab/Pagination';


export default function UsePagination({count, _DATA}) {
  const { items } = usePagination({
    count: count,
  })

  return (
    <nav className={styles.paginationBlock}>
      <ul className={styles.ulPagination}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null

          let fun = () => {}

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…'
          } else if (type === 'page') {
            fun = () => _DATA.jump(page)
            children = (
              <button className={styles.paginationBtn} type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                {page}
              </button>
            )
          } else if (type === 'next') {
            fun = () => _DATA.next()
            children = (
              <button className={styles.paginationBtn} type="button" {...item}>
                <img className={styles.paginationBtnImgRight} src="/img/pagination-arrow-right.svg" alt=""/>
              </button>
            )
          } else if (type === 'previous') {
            fun = () => _DATA.prev()
            children = (
              <button className={styles.paginationBtn} type="button" {...item}>
                <img className={styles.paginationBtnImgLeft} src="/img/pagination-arrow-left.svg" alt=""/>
              </button>
            )
          }

          const funWith = () => {
            fun()
            const gallery = document.getElementById('gallery')
            window.scrollTo(0, gallery.offsetTop)
          }

          return <li onClick={funWith} key={index}>{children}</li>
        })}
      </ul>
    </nav>
  )
}