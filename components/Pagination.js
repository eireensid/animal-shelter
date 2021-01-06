import styles from '~/styles/components/Pagination.module.scss'
import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';


export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
    
  })

  return (
    <nav className={styles.paginationBlock}>
      <ul className={styles.ulPagination}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button className={styles.paginationBtn} type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                {page}
              </button>
            );
          } else if (type === 'next') {
            children = (
              <button className={styles.paginationBtn} type="button" {...item}>
                <img src="/img/pagination-arrow-right.svg" alt=""/>
              </button>
            );
          } else if (type === 'previous') {
            children = (
              <button className={styles.paginationBtn} type="button" {...item}>
                <img src="/img/pagination-arrow-left.svg" alt=""/>
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  )
}