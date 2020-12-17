import moment from 'moment'

export const testAnimals = [
  {name: "1", paw: "looking-for-home.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "2", paw: "looking-for-home.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  {name: "3", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
  {name: "4", paw: "looking-for-home.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "5", paw: "looking-for-home.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  {name: "6", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
  {name: "7", paw: "looking-for-home.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "8", paw: "looking-for-home.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  {name: "9", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
  {name: "10", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},

  {name: "11", paw: "need-adoptation.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "12", paw: "need-adoptation.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  {name: "13", paw: "need-adoptation.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
  {name: "14", paw: "need-adoptation.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "15", paw: "need-adoptation.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},

  {name: "16", paw: "need-guardian.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "17", paw: "need-guardian.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  {name: "18", paw: "need-guardian.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
  {name: "19", paw: "need-guardian.png", age: "10 лет", sex: "М", photo: "Misha.png"},
  {name: "20", paw: "need-guardian.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
  {name: "21", paw: "need-guardian.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
  {name: "22", paw: "need-guardian.png", age: "10 лет", sex: "М", photo: "Misha.png"}
]

export const homePets = [
  {
    name: "Ульяна", 
    about: "У нас прекрасная новость! Наша красавица Ульяна  наконец поехала домой!!! \n" +
          "Первый привет уже прилете. Улечке заботливая хозяйка навела красоту, вычесала ее роскошную шубку," +
          "а кошечка успешно освоила территорию и наслаждается прелестями домашней жизни. Все самое страшное позади!",
    photo: "", gallery: []
  },
]

export const shelterPets = [
  {name: "Муся", sex: "Ж", age: "4 года",  personality: "Ласковая игруля", paw: "looking-for-home.png", about: "", photo: "", gallery: []},
]

function ageEnding (val, measure) {
  let res = measure === 'days' ? 'дней' : (measure === 'mounts' ? 'месяцев' : 'лет')
  if (val === 11) {
    res = measure === 'days' ? 'дней' : (measure === 'mounts' ? 'месяцев' : 'лет')
  } else if (val % 10 === 1) {
    res = measure === 'days' ? 'день' : (measure === 'mounts' ? 'месяц' : 'год')
  } else if (val >= 5 && val <= 20) {
    res = measure === 'days' ? 'дней' : (measure === 'mounts' ? 'месяцев' : 'лет')
  } else if (val % 10 > 1 && val % 10 < 5) {
    res = measure === 'days' ? 'дня' : (measure === 'mounts' ? 'месяца' : 'года')
  } 
  return res
}

export function transformPets ({name, sex, date}) {
  const nowDate = moment()
  const birthDate = moment(date)
  const daysDiff = nowDate.diff(birthDate, 'days')
  let age = `${daysDiff} ${ageEnding(daysDiff, 'days')}`
  const monthsDiff = nowDate.diff(birthDate, 'months')
  if (monthsDiff) age = `${monthsDiff} ${ageEnding(monthsDiff, 'months')}`
  const yearDiff = nowDate.diff(birthDate, 'year')
  if (yearDiff) age = `${yearDiff} ${ageEnding(yearDiff, 'year')}`
  return {
    name: name,
    paw: 'looking-for-home.png',
    age: age,
    sex: sex === 'male' ? 'М' : 'Ж',
    photo: 'Misha.png'
  }
}
