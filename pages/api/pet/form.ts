import type { NextApiRequest, NextApiResponse } from 'next'
import { Pet, createPet, findPet, editPet, deletePet } from '~/modules/back/pet'
import admin from '~/modules/back/db'
import { v4 as uuidv4 } from 'uuid'
import form from '~/modules/back/form'
const bucket = admin.storage().bucket()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const {id} = req.query
      console.log('delete pet id', id)
      const pet: Pet = await findPet({id})
      if (!pet) {
        res.status(404).end()
      } else {
        for (const fileName of pet.files) {
          console.log('start delete file', fileName)
          const file = bucket.file(fileName)
          try {
            await file.delete()
          } catch (_) {}
          console.log('end delete file', fileName)
        }
        await deletePet(pet)
        res.status(200).end()
      }
    }
    if (req.method === 'POST') {
      console.log('form post')
      const { fields: data, files } = await form(req)
      console.log('form post data', data)
      console.log('form post files', files)
      for (let field of [
        'name',
        'type',
        'description'
      ]) {
        if (!data[field]) {
          return res.status(400).json({ message: `Поле ${field} не должно быть пустым` })
        }
      }

      data.foundHome = data.foundHome === 'true'

      if (!data.foundHome) {
        for (let field of [
          'personality',
          'date',
          'sex',
          'statuses'  
        ]) {
          if (!data[field]) {
            return res.status(400).json({ message: `Поле ${field} не должно быть пустым` })
          }
        }
      }

      data.grafting = data.grafting === 'true'
      data.sterilization = data.sterilization === 'true'
      data.isPhoto = data.isPhoto === 'true'
      data.isGallery = data.isGallery === 'true'
      data.statuses = data.statuses.split(',')
      data.files = data.files ? data.files.split(',') : []
      console.log('data.files', data.files)
      data.year = Number(data.year)
      data.mounth = Number(data.mounth)

      if (data.id) {
        const pet: Pet = await findPet({id: data.id})
        if (!pet) { 
          return res.status(400).json({ message: 'Не существует записи для редактирования' })
        } else {
          const isPhoto = data.files.some(fileName => pet.photo && pet.photo.includes(fileName))
          if (!isPhoto && !data.isPhoto) {
            return res.status(400).json({ message: `Чтобы удалить главное фото нужно загрузить новое` })
          }
          for (const fileName of pet.files) {
            if (!data.files.includes(fileName)) {
              console.log('start delete file', fileName)
              const file = bucket.file(fileName)
              try {
                await file.delete()
              } catch (_) {}
              console.log('end delete file', fileName)
            }
          }
          pet.gallery = pet.gallery.filter(s => {
            return data.files.some(f => s.includes(f))
          })
          pet.files = data.files
          let isFirst = true
          for (let obj of files) {
            const name = obj.name
            console.log('start save file', name)
            const buffer = obj.buffer
            const token = uuidv4()
            const fileName = token + '.' + name.split('.')[1]
            const file = bucket.file(fileName)
            await file.createWriteStream({
              metadata: {
                metadata: {
                  firebaseStorageDownloadTokens: token
                }
              }
            }).end(buffer)
            const photoUrl = `https://firebasestorage.googleapis.com/v0/b/animal-shelter-c3f16.appspot.com/o/${fileName}?alt=media`
            if (data.isPhoto && isFirst) {
              isFirst = false
              pet.photo = photoUrl
              pet.gallery.unshift(photoUrl)
              pet.files.unshift(fileName)
              console.log('isPhoto end save file', name, 'photoUrl', photoUrl)
            } else {
              pet.files.push(fileName)
              pet.gallery.push(photoUrl)
            }
            console.log('end save file', name, 'photoUrl', photoUrl)
          }
          pet.foundHome = data.foundHome
          pet.name = data.name
          pet.type = data.type
          pet.personality = data.personality
          pet.date = data.date
          pet.sex = data.sex
          pet.year = data.year
          pet.mounth = data.mounth
          pet.grafting = data.grafting
          pet.sterilization = data.sterilization
          pet.description = data.description
          pet.statuses = data.statuses
          await editPet(pet)
        }
      } else {
        // if (!data.isPhoto) {
        //   return res.status(400).json({ message: 'Необходимо выбрать фотографию' })
        // }
        if (!data.isGallery) {
          return res.status(400).json({ message: 'Необходимо выбрать галерею' })
        }
        data.photo = null
        data.gallery = []
        data.files = []
        for (let name in files) {
          console.log('start save file', name)
          const buffer = files[name]
          const token = uuidv4()
          const fileName = token + '.' + name.split('.')[1]
          const file = bucket.file(fileName)
          await file.createWriteStream({
            metadata: {
              metadata: {
                firebaseStorageDownloadTokens: token
              }
            }
          }).end(buffer)
          data.files.push(fileName)
          const photoUrl = `https://firebasestorage.googleapis.com/v0/b/animal-shelter-c3f16.appspot.com/o/${fileName}?alt=media`
          if (!data.photo) {
            data.photo = photoUrl
            data.gallery.unshift(photoUrl)
          } else {
            data.gallery.push(photoUrl)
          }
          console.log('end save file', name, 'photoUrl', photoUrl)
        }
        await createPet(data)
      }
      
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    console.error(err)
    res.status(500).end()
  } 
}

export const config = {
  api: {
    bodyParser: false,
  }
}
