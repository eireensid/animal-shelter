import { getPetAgeInMounth, Pet } from '../common/pet'


function ageEnding (val, measure) {
  let res = measure === 'days' ? 'дней' : (measure === 'months' ? 'месяцев' : 'лет')
  if (val === 11) {
    res = measure === 'days' ? 'дней' : (measure === 'months' ? 'месяцев' : 'лет')
  } else if (val % 10 === 1) {
    res = measure === 'days' ? 'день' : (measure === 'months' ? 'месяц' : 'год')
  } else if (val >= 5 && val <= 20) {
    res = measure === 'days' ? 'дней' : (measure === 'months' ? 'месяцев' : 'лет')
  } else if (val % 10 > 1 && val % 10 < 5) {
    res = measure === 'days' ? 'дня' : (measure === 'months' ? 'месяца' : 'года')
  } 
  return res
}

export function transformPets (pet: Pet) {
  let age = ''
  const petAge = getPetAgeInMounth(pet)
  const mounth = petAge % 12
  const year = (petAge - mounth) / 12
  if (year) {
    age += `${year} ${ageEnding(year, 'year')}`
  }
  if (mounth) {
    if (age) age += ' '
    age += `${mounth} ${ageEnding(mounth, 'months')}`
  }
  if (!age) age = '-'
  return {
    id: pet.id,
    name: pet.name,
    type: pet.type,
    paw: pet.statuses.map(status => {
      return status + '.png' 
    }),
    age: age,
    sex: pet.sex,
    photo: pet.photo,
    gallery: pet.gallery,
    personality: pet.personality,
    about: pet.description.split('\n'),
    foundHome: pet.foundHome
  }
}
