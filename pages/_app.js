import '~/styles/main.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { testAnimals, transformPets } from '~/modules/front/app'

export default function MyApp({Component, pageProps}) {
  const [animals, setAnimals] = useState([])
  
  useEffect(async () => {
    setAnimals(testAnimals)
    const res = await axios.get('/api/pet/all')
    const pets = res.data.map(transformPets)
    console.log('pets', pets)
    // setAnimals(pets)
  }, [])

  return (
    <>
      <Component animals={animals} {...pageProps} />
    </>
  )
}
