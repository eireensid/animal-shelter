import Link from 'next/link'
import styles from '~/styles/components/BreadCrumbs.module.scss'
import {useRouter} from 'next/router'

export default function BreadCrumbs({title, petType, petPaw, take}) {
  const router = useRouter()
  
  return <>   
    <div className={styles.breadCrumbs}>
      <Link href="/"><span>Главная /</span></Link> <span>{title}</span>  <span>{petPaw}</span> <span>{petType}</span> <span>{router.query.name}</span> <span>{take}</span>
    </div>
  </>
}