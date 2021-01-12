import Link from 'next/link'
import Router from 'next/router'
import styles from '~/styles/components/BreadCrumbs.module.scss'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

export default function BreadCrumbs({title, petType, petPaw, petName, take}) {
  const router = useRouter()

  const [titleUrl, setTitleUrl] = useState({ pathname: '/', query: {}})

  const changeTitleUrl = () => {
    if (title === "Питомцы / " || title === "Питомцы") {
      setTitleUrl({ pathname: '/pets', query: {}})
    } else if (title === "Привет из дома / " || title === "Привет из дома") {
      setTitleUrl({ pathname: '/hellos-from-homes', query: {}})
    } else if (title === "Нужды приюта") {
      setTitleUrl({ pathname: '/basic-needs-of-teremok', query: {}})
    } else if (title === "Опекунство и адаптация") {
      setTitleUrl({ pathname: '/guardianship-and-adaptation', query: {}})
    } else if (title === "Прогулки с собаками") {
      setTitleUrl({ pathname: '/walks-with-dogs', query: {}})
    } else if (title === "Отчеты") {
      setTitleUrl({ pathname: '/shelter-reports', query: {}})
    }
  }

  useEffect(changeTitleUrl, [title]) 

  let petNameUrl = { pathname: '/pets/[name]', query: { name: petName }}

  const load = async (path) => {
    console.log('load')
    await Router.push(path)
  }

  let petPawFilter = ''
  if (petPaw === "Ищут дом / ") {
    petPawFilter = '?filter=looking-for-home#gallery'
  } else if (petPaw === "Нужен опекун / ") {
    petPawFilter = '?filter=need-guardian#gallery'
  } else if (petPaw === "Нужна адаптация / ") {
    petPawFilter = '?filter=need-adoptation#gallery'
  } else if (petPaw === "Проходят лечение / ") {
    petPawFilter = '?filter=undergo-treatment#gallery'
  } else if (petPaw === "Малыши / ") {
    petPawFilter = '?filter=baby-pets#gallery'
  }

  let petTypeFilter = ''
  if (petType === "Кошки / ") {
    petTypeFilter = '?animal=cat#gallery'
  } else if (petType === "Собаки / ") {
    petTypeFilter = '?animal=dog#gallery'
  }

  
  return <>   
    <div className={styles.breadCrumbs}>
      <Link href="/"><span>Главная / </span></Link>
      <Link href={titleUrl}><span>{title}</span></Link>
      <a onClick={() => load(`/pets/${petPawFilter}`)}>
        <span>{petPaw}</span>
      </a>
      <a onClick={() => load(`/pets/${petTypeFilter}`)}>
        <span>{petType}</span>
      </a>
      <Link href={petNameUrl}><span>{petName}</span></Link>
      <span>{router.query.name}</span>
      <span>{take}</span>
    </div>
  </>
}