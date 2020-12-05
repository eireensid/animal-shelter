import '~/styles/main.scss'
import { getAllPets } from '~/modules/pet'

export default function MyApp({Component, pageProps, animals}) {
  return (
    <>
      <Component animals={animals} {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  let animals = await getAllPets()
  
  if (process.env.NODE_ENV === 'development' || true) {
    animals = [
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
  }

  return { animals }
}
