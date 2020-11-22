import Head from 'next/head'
// import Router from 'next/router'
import styles from '../styles/admin.module.scss'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function About(title='Admin') {
  return <>
    <Head>
      <title>Admin</title>
    </Head>
    <Container maxWidth="sm">
      <Box className={styles.authBox}>
        <Paper className={styles.authPaper}>
          <h3>Авторизация</h3>
          <TextField className={styles.authInputField} label="Логин" variant="outlined" />
          <TextField className={styles.authInputField} label="Пароль" variant="outlined" type="password" />
          <Button className={styles.authButton} variant="contained" color="primary" disableElevation>
            Вход
          </Button>
        </Paper>
      </Box>
    </Container>
  </>
}