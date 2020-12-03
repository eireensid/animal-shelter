import Link from 'next/link'
import styles from '~/styles/components/BreadCrumbs.module.scss'

export default function BreadCrumbs({title}) {
  return <>   
    <div className={styles.breadCrumbs}>
      <Link href="/"><span>Главная</span></Link><span> / </span><span>{title}</span>
    </div>
  </>
}