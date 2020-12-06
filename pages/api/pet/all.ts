import type { NextApiRequest, NextApiResponse } from 'next'
import { Pet, getAllPets } from '~/modules/back/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const pets: Array<Pet> = await getAllPets()
      res.status(200).json(pets)
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).end()
  } 
}
