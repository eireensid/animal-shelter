import type { NextApiRequest, NextApiResponse } from 'next'
import { Pet, createPet, findPet, editPet } from '~/modules/back/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const data = req.body
      if (!data.name) {
        return res.status(400).json({ message: 'Поле кличка не должно быть пустым' })
      }
      if (!data.character) {
        return res.status(400).json({ message: 'Поле характер не должно быть пустым' })
      }

      if (data.id !== null) {
        const pet: Pet = await findPet({_id: data.id})
        if (!pet) { 
          return res.status(400).json({ message: 'Не существует записи для редактирования' })
        } else {
          pet.name = data.name
          pet.character = data.character
          pet.sex = data.sex
          pet.date = data.date
          pet.grafting = data.grafting
          pet.sterilization = data.sterilization
          pet.description = data.description
          await editPet(pet)
        }
      } else {
        await createPet(data)
      }
      
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).end()
  } 
}
