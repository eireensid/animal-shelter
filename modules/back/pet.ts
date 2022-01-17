import admin from './db'
import { v4 as uuidv4 } from 'uuid'
import { getPetAgeInMounth, Pet } from '../common/Pet'
const db = admin.firestore()

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

export type PagePetRes = {
  pageNum: number,
  pageCount: number,
  count: number,
  items: Array<Pet>
}

export type PetFilter = [string, any]

export function getPagePets (itemCount: number, pageNum: number, filters: PetFilter[]): Promise<PagePetRes> {
  return new Promise(async (resolve, reject) => {
    try {
      let ref: any = db.collection('pets')
      const offset: number = itemCount * (pageNum - 1)
      let nameFilter, minAge, maxAge
      if (filters !== null) {
        for (let [name, value] of filters) {
          let operator = '=='
          if (name === 'statuses') {
            operator = 'array-contains-any'
          }
          if (name === 'minAge') {
            minAge = value
            continue
          }
          if (name === 'maxAge') {
            maxAge = value
            continue
          }
          if (name === 'name') {
            nameFilter = value.toLowerCase()
            continue
          }
          ref = ref.where(name, operator, value)
        }
      }
      let allItemsCount = await (await ref.get()).size
      if (!nameFilter) {
        ref = ref.offset(offset).limit(itemCount)
      }
      const snapshot = await ref.get()
      let pets = new Array<Pet>()
      snapshot.forEach((doc) => {
        pets.push(doc.data() as Pet)
      })
      if (nameFilter || maxAge || minAge) {
        if (nameFilter) {
          pets = pets.filter(pet => {
            const petName = pet.name.toLowerCase()
            return petName.includes(nameFilter)
          })
        }
        if (maxAge) {
          pets = pets.filter(pet => {
            const petAge = getPetAgeInMounth(pet)
            return petAge <= maxAge
          })
        }
        if (minAge) {
          pets = pets.filter(pet => {
            const petAge = getPetAgeInMounth(pet)
            return petAge >= minAge
          })
        }
        allItemsCount = pets.length
        let endIndex = offset + itemCount
        if (endIndex > allItemsCount) {
          endIndex = allItemsCount
        }
        pets = pets.slice(offset, endIndex)
      }
      const pageCount: number = Math.ceil(allItemsCount / itemCount)
      const res: PagePetRes = {
        pageNum: pageNum,
        pageCount: pageCount,
        count: pets.length,
        items: pets
      }
      resolve(res)
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
