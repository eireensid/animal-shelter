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
    id: 1,
    name: "Ульяна", 
    about: ["У нас прекрасная новость! Наша красавица Ульяна  наконец поехала домой!!!",
          "Первый привет уже прилете. Улечке заботливая хозяйка навела красоту, вычесала ее роскошную шубку," +
          "а кошечка успешно освоила территорию и наслаждается прелестями домашней жизни. Все самое страшное позади!"],
    photo: "/img/photo-home-pets/1-1.jpg", 
    gallery: ["/img/photo-home-pets/1-2.jpg", "/img/photo-home-pets/1-3.jpg", "/img/photo-home-pets/1-4.jpg", "/img/photo-home-pets/1-5.jpg", "/img/photo-home-pets/1-6.jpg"]
  },
]

export const shelterPets = [
  {
    id: 1, 
    type: "cat",
    name: "Алик", 
    sex: "М", 
    age: "5 лет",  
    personality: "Серьезный котик", 
    paw: ["looking-for-home.png", "need-guardian.png", "need-adoptation.png"], 
    about: ['Алик "бабушкин" - взрослый, серьезный котик. Характер спокойный и немного отстраненный. Приучен к туалету. Кастрирован и привит.'], 
    photo: "/img/photo-shelter-pets/1-1.jpg", 
    gallery: ["/img/photo-shelter-pets/1-2.jpg"]
  },
  {
    id: 2, 
    type: "cat",
    name: "Гром", 
    sex: "М", 
    age: "3 года",  
    personality: "Ласковый игрун", 
    paw: ["looking-for-home.png", "need-guardian.png"], 
    about: ["Гром - молодой и игривый котик.", "Очень ласковый и игривый. Кастрирован и привит. Так радуется приходу человека!",
          "100% домашний котик. И очень красивый, шерстка гладкая, приятная на ощупь. А уж в домашних условиях при должном уходе, ммм, ещё и заблестит! Скорее бы нашлись заботливые руки для него."], 
    photo: "/img/photo-shelter-pets/2-1.jpg", 
    gallery: ["/img/photo-shelter-pets/2-1.jpg"]
  },
  {
    id: 3, 
    type: "cat",
    name: "Гражданочка", 
    sex: "Ж", 
    age: "4 года",  
    personality: "Общительная ласкуша", 
    paw: ["looking-for-home.png", "need-guardian.png"], 
    about: ["Гражданочка - взрослая и красивая девочка.",
          "Ласковая, хорошо идёт на контакт, любит находиться рядом с человеком. Привита и стерилизована."], 
    photo: "/img/photo-shelter-pets/3-1.jpg", 
    gallery: ["/img/photo-shelter-pets/3-1.jpg"]
  },
  {
    id: 4, 
    type: "cat",
    name: "Гретта", 
    sex: "Ж", 
    age: "2 года",  
    personality: "Молодая и симпатичная", 
    paw: ["looking-for-home.png", "need-guardian.png", "need-adoptation.png"], 
    about: ["Гретта-Громовская собственной персоной!",
          "Молодая и симпатичная кошечка с нетерпением ждёт, когда же за ней придёт именно ЕЁ человек. Она ждёт и ждёт, а её человек до сих пор не приходит.. Может быть, вы присмотритесь и поймёте, что эта киса создана для вас? Кошечка стерилизована, привита и здорова."], 
    photo: "/img/photo-shelter-pets/4-1.jpg", 
    gallery: ["/img/photo-shelter-pets/4-1.jpg"]
  },
  {
    id: 5, 
    type: "cat",
    name: "Марточка", 
    sex: "Ж", 
    age: "2 года",  
    personality: "Шаловливая особа", 
    paw: ["need-adoptation.png", "looking-for-home.png", "need-guardian.png"], 
    about: ["Марточка - молодая кошечка, хулиганка редкостная, смешная и шаловливая особа, которая ищет хозяев с хорошим запасом терпения и чувством юмора!",
          "Марточка будет удивлять каждый день, веселить, скакать, беситься, играть, и тем самым заметно повышать уровень позитива в доме!",
          "Марточка великолепно ладит с другими кошками, ходит в лоток.",
          "Ну а мы очень-очень хотим ее пристроить в ответственные и добрые руки!"], 
    photo: "/img/photo-shelter-pets/5-1.jpg", 
    gallery: ["/img/photo-shelter-pets/5-2.jpg", "/img/photo-shelter-pets/5-3.jpg"]
  },
  // {
  //   id: 22, 
  //   type: "dog",
  //   name: "Дина", 
  //   sex: "Ж", 
  //   age: "5 лет",  
  //   personality: "Бархатная и спокойная", 
  //   paw: ["looking-for-home.png", "need-guardian.png"], 
  //   about: ["Дина-мартышка ищет семью!",
  //         "История Дины начинается в приюте с 2017 года, когда девочку привезли с пепелища из посёлка Мартышкино. На развалинах сгоревшего дома Дина осталась одна. На этом ее домашняя жизнь и закончилась.",
  //         "Дина - обладатель бархатной шерстки. Скромная, спокойная, непритязательная. Контактная, тянется к человеку. Стерилизована, привита, здорова.",
  //         "Дина - как раз из тех, кто с каждым годом все больше рискует остаться в приюте навсегда. Менее трогательной и трепетной она от этого не становится!",
  //         "Также Дине очень нужны красивые фотографии, чтобы потенциальные хозяева скорее ее заметили! Дина будет рада прогулкам с волонтёрами."], 
  //   photo: "/img/photo-shelter-pets/22-1.jpg", 
  //   gallery: ["/img/photo-shelter-pets/22-2.jpg", "/img/photo-shelter-pets/22-3.jpg", "/img/photo-shelter-pets/22-4.jpg", "/img/photo-shelter-pets/22-5.jpg"]
  // },
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
