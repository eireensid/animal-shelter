import type { NextApiRequest, NextApiResponse } from 'next'
import { User, findUser } from '~/modules/user'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const data = req.body
      const user: User = await findUser({token: data.token})
      const statucCode = user ? 200 : 405
      res.status(statucCode).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).end()
  } 
}
