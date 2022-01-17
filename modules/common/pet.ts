import moment from 'moment'

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

export function getPetAgeInMounth (pet: Pet): number {
  const nowDate = moment()
  const createDate = moment(pet.date)
  const yearDiff = nowDate.diff(createDate, 'year')
  const newYear = pet.year + yearDiff
  const monthsDiff = nowDate.diff(createDate, 'months') % 12
  const newMounth = pet.mounth + monthsDiff
  return newYear * 12 + newMounth
}
