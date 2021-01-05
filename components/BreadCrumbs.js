import Link from 'next/link'
import styles from '~/styles/components/BreadCrumbs.module.scss'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

export default function BreadCrumbs({title, petType, petPaw, take}) {
  const router = useRouter()

  const [titleUrl, setTitleUrl] = useState({ pathname: '/', query: {}})

  const changeTitleUrl = () => {
    if (title === "Питомцы / ") {
      setTitleUrl({ pathname: '/pets', query: {}})
    } else if (title === "Привет из дома / ") {
      setTitleUrl({ pathname: '/hellos-from-homes', query: {}})
    }
  }

  useEffect(changeTitleUrl, [title]) 

  
  return <>   
    <div className={styles.breadCrumbs}>
      <Link href="/"><span>Главная /</span></Link> <Link href={titleUrl}><span>{title}</span></Link>  <span>{petPaw}</span> <span>{petType}</span> <span>{router.query.name}</span> <span>{take}</span>
    </div>
  </>
}