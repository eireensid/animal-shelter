import type { NextApiRequest, NextApiResponse } from 'next'
import { getPagePets, PagePetRes, PetFilter } from '~/modules/back/pet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const fields = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
      // Обязательные поля
      for (let field of [
        'itemCount',
        'pageNum'
      ]) {
        if (!fields[field]) {
          return res.status(400).json({ message: `Поле ${field} не должно быть пустым` })
        }
      }
      // Дополнительные поля
      let filters: PetFilter[] = []
      // Фильтр статусов, например, looking-for-home, need-guardian
      if (fields.statuses) {
        if (!Array.isArray(fields.statuses)) {
          return res.status(400).json({ message: `Поле statuses должно быть массивом` })
        }
        filters.push(['statuses', fields.statuses])
      }
      // Фильтр ищет дом, или уже нашёл
      if (fields.foundHome) {
        if (typeof fields.foundHome !== 'boolean') {
          return res.status(400).json({ message: `Поле foundHome должно быть одним из: true, false` })
        }
        filters.push(['foundHome', fields.foundHome])
      }
      // Фильтр тип животного, кошка, собака
      if (fields.type) {
        if (![
          'cat',
          'dog'
        ].includes(fields.type)) {
          return res.status(400).json({ message: `Поле type должно быть одним из: cat, dog` })
        }
        filters.push(['type', fields.type])
      }
      // Поиск по части имени
      if (fields.name) {
        if (typeof fields.name !== 'string') {
          return res.status(400).json({ message: `Поле name должно быть строкой` })
        }
        filters.push(['name', fields.name])
      }
      // Возраст от
      if (fields.minYear) {
        if (typeof fields.minYear !== 'number') {
          return res.status(400).json({ message: `Поле minYear должно быть числом` })
        }
        filters.push(['minYear', fields.minYear])
      }
      // Возраст до
      if (fields.maxYear) {
        if (typeof fields.maxYear !== 'number') {
          return res.status(400).json({ message: `Поле maxYear должно быть числом` })
        }
        filters.push(['maxYear', fields.maxYear])
      }

      let result: PagePetRes = await getPagePets(fields.itemCount, fields.pageNum, filters)
      res.status(200).json(result)
    } else {
      res.status(404).end()
    }
  } catch (err) {
    console.error(err)
    res.status(500).end()
  } 
}
