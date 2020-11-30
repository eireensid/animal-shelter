import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import styles from '~/styles/admin.module.scss'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

export default function Admin() {
  useEffect(async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      Router.push('/admin/auth')
    } else {
      try {
        await axios.post('/api/user/check', {token})        
      } catch (err) {
        Router.push('/admin/auth')
        console.error('err', err)
      }
    }
  }, [])

  function addPet () {
    console.log('addPet')
    Router.push('/admin/pet/add')
  }

  function etitPets () {
    console.log('etitPets')
    Router.push('/admin/pet/edit')
  }

  return <>
    <Head>
      <title>Admin</title>
    </Head>
    <Container>
      <Box className={styles.mainBox}>
        <Button className={styles.mainButton} variant="contained" color="primary" disableElevation
          onClick={addPet}>
          Добавить питомца
        </Button>
        <Button className={styles.mainButton} variant="contained" color="primary" disableElevation
          onClick={etitPets}>
          Редактировать питомцев
        </Button>
      </Box>
    </Container>
  </>
}