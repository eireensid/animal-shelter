import type { NextApiRequest, NextApiResponse } from 'next'
import { User, findUser, saveUser, getSuperUser } from '~/modules/back/user'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      await getSuperUser()
      const data = req.body
      const user: User = await findUser({login: data.login})
      if (!user) { 
        return res.status(400).json({ message: 'Неверное имя пользователя или пароль' })
      }
      const match = await bcrypt.compare(data.password, user.password);
      if (!match) { 
        return res.status(400).json({ message: 'Неверное имя пользователя или пароль' })
      }
      user.token = uuidv4()
      await saveUser(user)
      res.status(200).json({ token: user.token })
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).end()
  } 
}
