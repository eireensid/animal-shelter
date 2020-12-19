import '~/styles/main.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { testAnimals, transformPets, homePets, shelterPets } from '~/modules/front/app'

export default function MyApp({Component, pageProps}) {
  const [_animals, setAnimals] = useState([])
  const [_homePets, setHomePets] = useState([])
  const [_shelterPets, setShelterPets] = useState([])
  
  useEffect(async () => {
    setAnimals(testAnimals)
    setHomePets(homePets)
    setShelterPets(shelterPets)
    const res = await axios.get('/api/pet/all')
    const pets = res.data.map(transformPets)
    console.log('pets', pets)
    // setAnimals(pets)
    screen.orientation.lock('landscape');
  }, [])

  return (
    <>
      <Component animals={_animals} shelterPets={_shelterPets} homePets={_homePets} {...pageProps} />
    </>
  )
}
