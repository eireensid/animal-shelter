import admin from './db'
import { v4 as uuidv4 } from 'uuid'
const db = admin.firestore()

export type Pet = {
  id: string,
  foundHome: boolean,
  name: string,
  type: string,
  personality: string,
  sex: string,
  date: string,
  year: number,
  mounth: number,
  grafting: boolean,
  sterilization: boolean,
  description: string,
  statuses: Array<string>,
  photo: string,
  gallery: Array<string>,
  files: Array<string>
}

export function getAllPets (): Promise<Array<Pet>> {
  return new Promise(async (resolve, reject) => {
    try {
      const ref = db.collection('pets')
      const snapshot = await ref.get()
      const pets = new Array<Pet>()
      snapshot.forEach((doc) => {
        pets.push(doc.data() as Pet)
      })
      resolve(pets)
    } catch (err) {
      reject(err)
    }
  })
}

export function findPet (obj: any): Promise<Pet> {
  return new Promise(async (resolve, reject) => {
    try {
      const ref = db.collection('pets')
      let nextRef:any = ref
      for (const key in obj) {
        console.log('findUser add where', key, '==', obj[key])
        nextRef = nextRef.where(key, '==', obj[key])
      }
      const snapshot = await nextRef.get()
      const pet: Pet = snapshot.docs.length ? snapshot.docs[0].data() : null
      resolve(pet)
    } catch (err) {
      reject(err)
    }
  })
}

export function deletePet (pet: Pet): Promise<void> {
  return new Promise(async (resolve, reject) => {
    console.log('deletePet pet', pet)
    const ref = db.collection('pets')
    const snapshot = await ref.where('id', '==', pet.id).get()
    if (!snapshot.docs.length) {
      return reject(new Error('doc not exists'))
    }
    const docId = snapshot.docs[0].id
    console.log('deletePet pet', pet)
    try {
      await ref.doc(docId).delete()
      console.log('deletePet success')
      resolve()
    } catch (err) {
      console.log('deletePet fail err', err)
      reject(err)
    }
  })
}

export function editPet (pet: Pet): Promise<void> {
  return new Promise(async (resolve, reject) => {
    console.log('editPet pet', pet)
    const ref = db.collection('pets')
    const snapshot = await ref.where('id', '==', pet.id).get()
    if (!snapshot.docs.length) {
      return reject(new Error('doc not exists'))
    }
    const docId = snapshot.docs[0].id
    console.log('editPet pet', pet)
    try {
      await ref.doc(docId).update(pet)
      console.log('editPet success save')
      resolve()
    } catch (err) {
      console.log('editPet fail err', err)
      reject(err)
    }
  })
}

export function createPet ({
  foundHome,
  name,
  type,
  personality,
  date,
  sex,
  year,
  mounth,
  grafting,
  sterilization,
  description,
  statuses,
  photo,
  gallery,
  files }): Promise<void> {
  return new Promise(async (resolve, reject) => {
    const pet: Pet = {
      id: uuidv4(),
      foundHome,
      name,
      type,
      personality,
      date,
      sex,
      year,
      mounth,
      grafting,
      sterilization,
      description,
      statuses,
      photo,
      gallery,
      files
    }
    const ref = db.collection('pets')
    try {
      await ref.add(pet)
      resolve()
    } catch (err) {
      reject(err)
    }
  })
}
