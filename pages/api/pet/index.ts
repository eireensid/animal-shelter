import type { NextApiRequest, NextApiResponse } from 'next'
import { Pet, findPet } from '~/modules/back/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      console.log('find pet req.query', req.query)
      const {id} = req.query
      console.log('find pet id', id)
      const pet: Pet = await findPet({id})
      const statucCode = pet ? 200 : 404
      res.status(statucCode).json(pet)
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).end()
  } 
}
