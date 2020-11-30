import Head from 'next/head'
import Router from 'next/router'
import styles from '~/styles/admin.module.scss'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'

export default function AddPet() {
  const [name, setName] = useState('')
  const [character, setСharacter] = useState('')
  const [sex, setSex] = useState('male')
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [grafting, setGrafting] = useState(false)
  const [sterilization, setSterilization] = useState(false)

  const addPet = async () => {
    // try {
    //   console.log('doLogin login', login, 'password', password)
    //   const res = await axios.post('/api/user/auth', {login, password})
    //   setErrorText('')
    //   localStorage.setItem('token', res.data.token)
    //   Router.push('/admin')
    // } catch (err) {
    //   const isMessage = err.response && err.response.data && err.response.data.message
    //   const message = isMessage ? err.response.data.message : 'Что-то пошло не так'
    //   setErrorText(message)
    //   console.error('doLogin err', err.message, err)
    // }
  }

  return <>
    <Head>
      <title>Add Pet</title>
    </Head>
    <Container>
      <Box className={styles.authBox}>
        <Paper className={styles.authPaper}>
          <h3>Добавление питомца</h3>
          <TextField className={styles.authInputField} label="Кличка" variant="outlined"
            value={name} onChange={e => setName(e.target.value)} />
          <TextField label="День рождения" type="date" className={styles.authInputField} InputLabelProps={{ shrink: true }}
            value={date} onChange={e => setDate(e.target.value)}
          />
          <TextField className={styles.authInputField} label="Характер" variant="outlined"
            value={character} onChange={e => setСharacter(e.target.value)} />
          <Box component="div" m={1}>
            <InputLabel id="label">Пол</InputLabel>
            <Select labelId="label" value={sex} onChange={e => setSex(e.target.value)}>
              <MenuItem value="male">М</MenuItem>
              <MenuItem value="female">Ж</MenuItem>
            </Select>
            <FormControlLabel
              control={<Checkbox checked={grafting} onChange={e => setGrafting(e.target.checked)} />}
              label="Прививки"
            />
            <FormControlLabel
              control={<Checkbox checked={sterilization} onChange={e => setSterilization(e.target.checked)} />}
              label="Стериализация"
            />
          </Box>
          {/* <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          /> */}
          <Button className={styles.authButton} variant="contained" color="primary" disableElevation
            onClick={addPet}>
            Добавить
          </Button>
        </Paper>
      </Box>
    </Container>
  </>
}