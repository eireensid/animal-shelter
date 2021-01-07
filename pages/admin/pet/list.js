import Head from 'next/head'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '~/styles/admin.module.scss'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import EditIcon from '@material-ui/icons/Edit'

export default function List() {
  const [pets, setPets] = useState([])

  useEffect(async () => {
    try {
      const {data} = await axios.get('/api/pet/all')
      setPets(data)     
    } catch (err) {
      console.error('/api/pet/all err', err)
    }
  }, [])

  function formPet (id) {
    Router.push('/admin/pet/form?id=' + id)
  }

  return <>
    <Head>
      <title>Pet List</title>
    </Head>
    <Container>
      <Box className={styles.mainBox}>
        {pets.map((p, i) => 
          <div className={styles.listImgRow}>
            <img className={styles.listImg} src={p.photo} />
            <div className={styles.listName}>{p.name}</div> 
            <span onClick={() => formPet(p.id)}>
              <EditIcon />
            </span>
          </div>
        )}
      </Box>
    </Container>
  </>
}