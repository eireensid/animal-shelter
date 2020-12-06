import bcrypt from 'bcrypt'

const Datastore = require('nedb')
const usersDb: Nedb = new Datastore({ filename: './databases/users.db', autoload: true})

export type User = {
  login: string,
  password: string,
  role: string,
  token: string
}

export function findUser (obj: any): Promise<User> {
  return new Promise((resolve, reject) => {
    usersDb.findOne(obj, (err, doc) => {
      if (err) return reject(err)
      resolve(doc)
    })
  })
}

export function createUser (login: string, password: string, role: string): Promise<User> {
  return new Promise(async (resolve, reject) => {
    const hashPassword = await bcrypt.hash(password, 12)
    const user: User = {login, password: hashPassword, role, token: null}
    usersDb.insert(user, (err, doc) => {
      if (err) return reject(err)
      resolve(doc)
    })
  })
}

export function getSuperUser (): Promise<User> {
  return new Promise(async (resolve, reject) => {
    const login = process.env.SUPER_USER_LOGIN
    const password = process.env.SUPER_USER_PASSWORD
    let user: User = await findUser({login})
    if (!user) {
      user = await createUser(login, password, 'admin')
    }
    resolve(user)
  })
}

export function saveUser (user): Promise<void> {
  return new Promise(async (resolve, reject) => {
    usersDb.update({ _id: user._id }, user, { multi: true }, (err, doc) => {
      if (err) return reject(err)
      resolve()
    })
  })
}
