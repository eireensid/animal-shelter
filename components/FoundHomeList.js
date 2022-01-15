import AnimalCard from '~/components/AnimalCard'
import usePagination from '~/hooks/usePagination'
import Pagination from '~/components/Pagination'
import styles from '~/styles/components/FoundHomeList.module.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { transformPets } from '~/modules/front/app'

export default function FoundHomeList() {
  const [pets, setPets] = useState([])

  useEffect(async () => {
    const res = await axios.post('/api/pet/list', {
      foundHome: true,
      itemCount: 100,
      pageNum: 1
    })
    setPets(res.data.items.map(transformPets))
  }, [])

  // Pagination
  const PER_PAGE = 12
  const count = Math.ceil(pets.length / PER_PAGE)
  const _DATA = usePagination(pets, PER_PAGE)

  return <>
    <div className={styles.animalsListBlock}>

      <div className={styles.ourPetsGallery}>
        {_DATA.currentData().map((animal, index) => (
          <div key={index}>
            <AnimalCard parent="home" animal={animal}/>
          </div>
        ))}
      </div>
      <div className={styles.paginationBlock}>
        <Pagination count={count} _DATA={_DATA} />
      </div>
    </div>
  </>
}