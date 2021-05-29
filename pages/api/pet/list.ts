import type { NextApiRequest, NextApiResponse } from 'next'
import { getPagePets, PagePetRes, PetFilter } from '~/modules/back/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const fields = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      for (let field of [
        'itemCount',
        'pageNum',
        'type'
      ]) {
        if (!fields[field]) {
          return res.status(400).json({ message: `Поле ${field} не должно быть пустым` })
        }
        if (field === 'type') {
          if (![
            'all',
            'home',
            'shelter'
          ].includes(fields['type'])) {
            return res.status(400).json({ message: `Поле ${field} должно быть одним из: all, home, shelter` })
          }
        }
      }
      const { itemCount, pageNum, type } = fields
      let filter: PetFilter = null
      if (type === 'home') {
        filter = ['foundHome', true]
      } else if (type === 'shelter') {
        filter = ['foundHome', false]
      }
      let result: PagePetRes = await getPagePets(itemCount, pageNum, filter)
      res.status(200).json(result)
    } else {
      res.status(404).end()
    }
  } catch (err) {
    console.error(err)
    res.status(500).end()
  } 
}
