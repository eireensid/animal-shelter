const Datastore = require('nedb')
const petsDb: Nedb = new Datastore({ filename: './public/databases/pets.db', autoload: true })

export type Pet = {
  name: string,
  character: string,
  sex: boolean,
  date: string,
  grafting: boolean,
  sterilization: boolean,
  description: string
}

export function getAllPets (): Promise<Array<Pet>> {
  return new Promise((resolve, reject) => {
    petsDb.find({}, (err, pets) => {
      if (err) return reject(err)
      resolve(pets)
    })
  })
}

export function findPet (obj: any): Promise<Pet> {
  return new Promise((resolve, reject) => {
    petsDb.findOne(obj, (err, doc) => {
      if (err) return reject(err)
      resolve(doc)
    })
  })
}

export function editPet (pet): Promise<void> {
  return new Promise(async (resolve, reject) => {
    petsDb.update({ _id: pet._id }, pet, { multi: true }, (err, doc) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

export function createPet ({
  name,
  character,
  sex,
  date,
  grafting,
  sterilization,
  description }): Promise<Pet> {
  return new Promise(async (resolve, reject) => {
    const pet: Pet = {name, character, sex, date, grafting, sterilization, description}
    petsDb.insert(pet, (err, doc) => {
      if (err) return reject(err)
      resolve(doc)
    })
  })
}
