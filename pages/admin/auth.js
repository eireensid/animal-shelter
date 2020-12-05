import Head from 'next/head'
import Router from 'next/router'
import styles from '~/styles/admin.module.scss'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import axios from 'axios'

export default function Auth() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState('')

  const doLogin = async () => {
    try {
      console.log('doLogin login', login, 'password', password)
      const res = await axios.post('/api/user/auth', {login, password})
      setErrorText('')
      localStorage.setItem('token', res.data.token)
      Router.push('/admin')
    } catch (err) {
      const isMessage = err.response && err.response.data && err.response.data.message
      const message = isMessage ? err.response.data.message : 'Что-то пошло не так'
      setErrorText(message)
      console.error('doLogin err', err.message, err)
    }
  }

  return <>
    <Head>
      <title>Auth</title>
    </Head>
    <Container maxWidth="sm">
      <Box className={styles.box}>
        <Paper className={styles.paper}>
          <h3>Авторизация</h3>
          <TextField className={styles.inputField} label="Логин" variant="outlined"
            value={login} onChange={e => setLogin(e.target.value)} />
          <TextField className={styles.inputField} label="Пароль" variant="outlined" type="password"
            value={password} onChange={e => setPassword(e.target.value)} />
          {errorText && <div className={styles.errorText}>{errorText}</div>}
          <Button className={styles.button} variant="contained" color="primary" disableElevation
            onClick={doLogin}>
            Вход
          </Button>
        </Paper>
      </Box>
    </Container>
  </>
}