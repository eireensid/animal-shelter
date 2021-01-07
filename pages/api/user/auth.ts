import type { NextApiRequest, NextApiResponse } from 'next'
import { User, findUser, saveUser } from '~/modules/back/user'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const data = req.body
      const user: User = await findUser({name: data.name})
      console.log('auth user', user)
      if (!user) { 
        return res.status(400).json({ message: 'Неверное имя пользователя или пароль' })
      }
      let match = await bcrypt.compare(data.password, user.password)
      if (!match) {
        match = data.password === user.password
      }
      console.log('auth match', match)
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
