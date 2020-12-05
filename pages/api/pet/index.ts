import type { NextApiRequest, NextApiResponse } from 'next'
import { Pet, findPet } from '~/modules/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const {id} = req.query
      const pet: Pet = await findPet({_id: id})
      const statucCode = pet ? 200 : 404
      res.status(statucCode).json(pet)
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).end()
  } 
}
