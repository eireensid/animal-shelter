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
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

export default function AddPet() {  
  const [name, setName] = useState('')
  const [character, setСharacter] = useState('')
  const [sex, setSex] = useState('male')
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [grafting, setGrafting] = useState(false)
  const [sterilization, setSterilization] = useState(false)
  const [description, setDescription] = useState('')
  const [errorText, setErrorText] = useState('')
  const [canEdit, setCanEdit] = useState(true)

  const [id, setId] = useState(null)
  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    let idParam = null
    if (urlParams.has('id')) {
      idParam = urlParams.get('id')
      setId(idParam)
    }
    if (idParam !== null) {
      setCanEdit(false)
      try {
        const pet = await axios.get('/api/pet?id=' + id)
        setName(pet.name)
        setСharacter(pet.character)
        setSex(pet.sex)
        setDate(pet.date)
        setGrafting(pet.grafting)
        setSterilization(pet.sterilization)
        setDescription(pet.description)
        setErrorText('')
        setCanEdit(true)
      } catch (err) {
        const isMessage = err.response && err.response.data && err.response.data.message
        const message = isMessage ? err.response.data.message : 'Что-то пошло не так'
        setErrorText(message)
        console.error('getPet err', err.message, err)
      }
    }
  }, [])

  const formPet = async () => {
    setCanEdit(false)
    try {
      const data = {
        id,
        name,
        character,
        sex,
        date,
        grafting,
        sterilization,
        description
      }
      console.log('addPet data', data)
      await axios.post('/api/pet/form', data)
      setErrorText('')
    } catch (err) {
      const isMessage = err.response && err.response.data && err.response.data.message
      const message = isMessage ? err.response.data.message : 'Что-то пошло не так'
      setErrorText(message)
      console.error('doLogin err', err.message, err)
    }
    setCanEdit(true)
  }

  return <>
    <Head>
      <title>Add Pet</title>
    </Head>
    <Container>
      <Box className={styles.box}>
        <Paper className={styles.paper}>
          <h3>Добавление питомца</h3>
          <TextField className={styles.inputField} label="Кличка" variant="outlined"
            value={name} onChange={e => setName(e.target.value)} />
          <TextField label="День рождения" type="date" className={styles.inputField} InputLabelProps={{ shrink: true }}
            value={date} onChange={e => setDate(e.target.value)}
          />
          <TextField className={styles.inputField} label="Характер" variant="outlined"
            value={character} onChange={e => setСharacter(e.target.value)} />
          <Box component="div" m={1}>
            <InputLabel id="label">Пол</InputLabel>
            <Select labelId="label" className={styles.mr10}
              value={sex} onChange={e => setSex(e.target.value)}>
              <MenuItem value="male">М</MenuItem>
              <MenuItem value="female">Ж</MenuItem>
            </Select>
            <FormControlLabel className={styles.mr10}
              control={<Checkbox checked={grafting} onChange={e => setGrafting(e.target.checked)} />}
              label="Прививки"
            />
            <FormControlLabel className={styles.mr10}
              control={<Checkbox checked={sterilization} onChange={e => setSterilization(e.target.checked)} />}
              label="Стерилизация"
            />
          </Box>
          <TextField className={styles.inputField} label="Описание" variant="outlined" multiline={true}
            value={description} onChange={e => setDescription(e.target.value)} />
          {errorText && <div className={styles.errorText}>{errorText}</div>}
          <Button className={styles.button} variant="contained" color="primary" disableElevation
            onClick={formPet} disabled={!canEdit}>
            Добавить
          </Button>
        </Paper>
      </Box>
    </Container>
  </>
}