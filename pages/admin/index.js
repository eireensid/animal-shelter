import Head from 'next/head'
import Router from 'next/router'
import styles from '~/styles/admin.module.scss'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import useAdmin from '~/hooks/useAdmin'

export default function Admin() {
  useAdmin(true)

  function formPet () {
    console.log('addPet')
    Router.push('/admin/form')
  }

  return <>
    <Head>
      <title>Admin</title>
    </Head>
    <Container>
      <Box className={styles.mainBox}>
        <Button className={styles.mainButton} variant="contained" disableElevation
          onClick={formPet} component="div">
          Добавить питомца
        </Button>
      </Box>
    </Container>
  </>
}