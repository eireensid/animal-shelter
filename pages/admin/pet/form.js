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
import InputBase from '@material-ui/core/InputBase'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete'
import Switch from '@material-ui/core/Switch'
import moment from 'moment'

export default function AddPet() {
  const [foundHome, setFoundHome] = useState(false)
  const [name, setName] = useState('')
  const [character, setСharacter] = useState('')
  const [sex, setSex] = useState('male')
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [year, setYear] = useState(0)
  const [mounth, setMounth] = useState(0)
  const [grafting, setGrafting] = useState(true)
  const [sterilization, setSterilization] = useState(true)
  const [description, setDescription] = useState('')
  const [statuses, setStatuses] = useState([])
  const [files, setFiles] = useState([])
  const [gallery, setGallery] = useState([])
  const [errorText, setErrorText] = useState('')
  const [canEdit, setCanEdit] = useState(true)
  const fileRef = useRef()
  const filesRef = useRef()

  const [id, setId] = useState('')
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
        const {data: pet} = await axios.get('/api/pet?id=' + idParam)
        console.log('edit pet', pet)
        setFoundHome(pet.foundHome)
        setName(pet.name)
        setСharacter(pet.character)
        setSex(pet.sex)
        setDate(pet.date)
        setYear(pet.year)
        setMounth(pet.mounth)
        setGrafting(pet.grafting)
        setSterilization(pet.sterilization)
        setDescription(pet.description)
        setStatuses(pet.statuses)
        setFiles(pet.files)
        setGallery(pet.gallery)
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

  const deletePet = async () => {
    setCanEdit(false)
    try {
      await axios.delete('/api/pet/form?id=' + id)
      Router.push('/admin')
    } catch (err) {
      const isMessage = err.response && err.response.data && err.response.data.message
      const message = isMessage ? err.response.data.message : 'Что-то пошло не так'
      setErrorText(message)
      console.error('deletePet err', err.message, err)
    }
    setCanEdit(true)
  }

  const formPet = async () => {
    setCanEdit(false)
    try {
      const formData = new FormData()
      formData.append('id', id)
      formData.append('foundHome', foundHome)
      formData.append('name', name)
      formData.append('character', character)
      formData.append('sex', sex)
      formData.append('date', date)
      formData.append('year', year)
      formData.append('mounth', mounth)
      formData.append('grafting', grafting)
      formData.append('sterilization', sterilization)
      formData.append('description', description)
      formData.append('statuses', statuses)
      formData.append('files', files)
      const isPhoto = fileRef.current.files.length !== 0
      formData.append('isPhoto', isPhoto)
      if (isPhoto) {
        formData.append('photoFile', fileRef.current.files[0])
      }
      for (let i = 0; i < filesRef.current.files.length; i++) {
        formData.append('galleryFiles', filesRef.current.files[i])
      }
      // await axios.post('/api/pet/form', formData)
      await axios({
        method: 'post',
        url: '/api/pet/form',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      setErrorText('')
      window.location.reload()
    } catch (err) {
      const isMessage = err.response && err.response.data && err.response.data.message
      const message = isMessage ? err.response.data.message : 'Что-то пошло не так'
      setErrorText(message)
      console.error('formPet err', err.message, err)
    }
    setCanEdit(true)
  }

  const saveText = id ? 'Изменить' : 'Добавить'
  const titleText = id ? 'Редактирование' : 'Добавление'

  return <>
    <Head>
      <title>Add Pet</title>
    </Head>
    <Container>
      <Box className={styles.box}>
        <Paper className={styles.paper}>
          <h3>{titleText} питомца</h3>
          <FormControlLabel
            control={<Switch color="primary" checked={foundHome} onChange={e => setFoundHome(e.target.checked)} />}
            label="Нашёл дом"/>
          <TextField className={styles.inputField} label="Кличка" variant="outlined"
            value={name} onChange={e => setName(e.target.value)} />
          {!foundHome && <Box component="div" m={1}>
            <InputLabel id="label1">Пол</InputLabel>
            <Select labelId="label1" className={styles.mr10}
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
            <TextField label="Лет" type="number" value={year} onChange={e => setYear(e.target.value)} />
            <TextField label="Месяцев" type="number" value={mounth} onChange={e => setMounth(e.target.value)}/>
            <TextField label="Дата создания" type="date" className={styles.inputField} InputLabelProps={{ shrink: true }}
            value={date} onChange={e => setDate(e.target.value)}
          />
          </Box>}
          {!foundHome && <TextField className={styles.inputField} label="Характер" variant="outlined"
            value={character} onChange={e => setСharacter(e.target.value)} />}
          <TextField className={styles.inputField} label="Описание" variant="outlined" multiline={true}
            value={description} onChange={e => setDescription(e.target.value)} />
          {!foundHome && <Box component="div" m={2}>
            <InputLabel id="label2">Статусы</InputLabel>
            <Select labelId="label2" className={styles.mr10} multiple={true}
              value={statuses} onChange={e => setStatuses(e.target.value)}>
              <MenuItem value="looking-for-home">Ищут дом</MenuItem>
              <MenuItem value="adaptation-needed">Нужна адаптация</MenuItem>
              <MenuItem value="need-guardian">Нужен опекун</MenuItem>
              <MenuItem value="undergoing-treatment">Проходят лечение</MenuItem>
            </Select>
          </Box>}
          {id !== '' && files.map((f, i) => 
            <div className={styles.formImgRow}>
              <img className={styles.formImg} src={`https://firebasestorage.googleapis.com/v0/b/animal-shelter-c3f16.appspot.com/o/${f}?alt=media`} />
              {f} 
              <span onClick={() => setFiles(files.filter((e, ind) => ind !== i))}>
                <DeleteIcon />
              </span>
            </div>
          )}
          <InputLabel className={styles.label}>Фото</InputLabel>
          <InputBase inputRef={fileRef} type="file" />
          <InputLabel className={styles.label}>Галерея</InputLabel>
          <InputBase inputRef={filesRef} type="file" inputProps={{multiple: true}}/>
          {errorText && <div className={styles.errorText}>{errorText}</div>}
          <Button className={styles.button} variant="contained" color="primary" disableElevation
            onClick={formPet} disabled={!canEdit}>
            {saveText}
          </Button>
          {id !== '' && <Button className={styles.button} variant="contained" color="secondary" disableElevation
            onClick={deletePet} disabled={!canEdit}>
            Удалить
          </Button>}
        </Paper>
      </Box>
    </Container>
  </>
}