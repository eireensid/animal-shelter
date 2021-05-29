import type { NextApiRequest, NextApiResponse } from 'next'
import { getPagePets, PagePetRes, PetFilter } from '~/modules/back/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const fields = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      for (let field of [
        'itemCount',
        'pageNum',
        'type',
        'statuses'
      ]) {
        if (!fields[field]) {
          if (field === 'statuses') {
            continue
          }
          return res.status(400).json({ message: `Поле ${field} не должно быть пустым` })
        }
        if (field === 'statuses' && !Array.isArray(fields[field])) {
          return res.status(400).json({ message: `Поле ${field} должно быть массивом` })
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
      const { itemCount, pageNum, type, statuses } = fields
      let filters: PetFilter[] = []
      if (type === 'home') {
        filters.push(['foundHome', true])
      } else if (type === 'shelter') {
        filters.push(['foundHome', false])
      }
      if (statuses) {
        filters.push(['statuses', statuses])
      }
      let result: PagePetRes = await getPagePets(itemCount, pageNum, filters)
      res.status(200).json(result)
    } else {
      res.status(404).end()
    }
  } catch (err) {
    console.error(err)
    res.status(500).end()
  } 
}
