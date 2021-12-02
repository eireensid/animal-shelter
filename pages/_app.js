import '~/styles/main.scss'
import axios from 'axios'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { transformPets } from '~/modules/front/app'

export default function MyApp({Component, pageProps}) {
  const [_homePets, setHomePets] = useState([])
  const [_shelterPets, setShelterPets] = useState([])
  
  useEffect(async () => {
    const res = await axios.post('/api/pet/list', { type: 'all', itemCount: 1000, pageNum: 1 })
    const pets = res.data.items.map(transformPets)
    // for (let i = pets.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1))
    //   [pets[i], pets[j]] = [pets[j], pets[i]]
    // }
    console.log('pets', pets)
    setHomePets(pets.filter(p => p.foundHome))
    setShelterPets(pets.filter(p => !p.foundHome))
  }, [])



  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
      </Head>
      <Component animals={_shelterPets} shelterPets={_shelterPets} homePets={_homePets} {...pageProps} />
    </>
  )
}
