import bcrypt from 'bcrypt'
import admin from './db'
import { v4 as uuidv4 } from 'uuid'
const db = admin.firestore()

export type User = {
  id: string,
  name: string,
  password: string,
  role: string,
  token: string
}

export function findUser (obj: any): Promise<User> {
  return new Promise(async (resolve, reject) => {
    try {
      const usersRef = db.collection('users')
      let usersNext:any = usersRef
      for (const key in obj) {
        console.log('findUser add where', key, '==', obj[key])
        usersNext = usersNext.where(key, '==', obj[key])
      }
      const findUsers = await usersNext.get()
      const user: User = findUsers.docs.length ? findUsers.docs[0].data() : null
      resolve(user)
    } catch (err) {
      reject(err)
    }
  })
}

export function createUser (login: string, password: string, role: string): Promise<User> {
  return new Promise(async (resolve, reject) => {
    const hashPassword = await bcrypt.hash(password, 12)
    const user: User = {id: uuidv4(), name: login, password: hashPassword, role, token: null}
    const usersRef = db.collection('users')
    try {
      const dbUser: any = await usersRef.add(user)
      resolve(dbUser.data())
    } catch (err) {
      reject(err)
    }
  })
}

export function saveUser (user: User): Promise<void> {
  return new Promise(async (resolve, reject) => {
    console.log('saveUser user', user)
    const usersRef = db.collection('users')
    const snapshot = await usersRef.where('name', '==', user.name).get()
    if (!snapshot.docs.length) {
      return reject(new Error('doc not exists'))
    }
    const docId = snapshot.docs[0].id
    console.log('saveUser user', user)
    try {
      await usersRef.doc(docId).update(user)
      console.log('saveUser success save')
      resolve()
    } catch (err) {
      console.log('saveUser fail err', err)
      reject(err)
    }
  })
}
