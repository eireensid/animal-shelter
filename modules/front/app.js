import moment from 'moment'


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

export function transformPets ({id, name, type, sex, statuses, date, personality, description, photo, gallery, year, mounth, foundHome}) {
  let _month = 0
  let age = ''
  const nowDate = moment()
  const birthDate = moment(date)
  if (year) {
    const yearDiff = nowDate.diff(birthDate, 'year')
    let newYear = year + yearDiff
    age += `${newYear} ${ageEnding(newYear, 'year')}`
    _month += newYear * 12
  }
  if (mounth) {
    const monthsDiff = nowDate.diff(birthDate, 'months')
    let newMounth = mounth + monthsDiff
    if (newMounth <= 11) {
      if (age) age += ' '
      age += `${newMounth} ${ageEnding(newMounth, 'months')}`
      _month += newMounth
    }
  }
  if (!age) age = '-'
  return {
    id: id,
    name: name,
    type: type,
    paw: statuses.map(status => {
      return status + '.png' 
    }),
    age: age,
    month: _month,
    sex: sex,
    photo: photo,
    gallery: gallery,
    personality: personality,
    about: description.split('\n'),
    foundHome
  }
}
