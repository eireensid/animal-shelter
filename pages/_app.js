import {useState} from 'react'
import '~/styles/main.scss'

export default function MyApp({Component, pageProps}) {
  const [animals, setAnimals] = useState([
    {name: "Миша", paw: "looking-for-home.png", age: "10 лет", sex: "М", photo: "Misha.png"},
    {name: "Китти", paw: "looking-for-home.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
    {name: "Женя", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
    {name: "Миша1", paw: "looking-for-home.png", age: "10 лет", sex: "М", photo: "Misha.png"},
    {name: "Китти1", paw: "looking-for-home.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
    {name: "Женя1", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
    {name: "Миша2", paw: "looking-for-home.png", age: "10 лет", sex: "М", photo: "Misha.png"},
    {name: "Китти2", paw: "looking-for-home.png", age: "4 года", sex: "Ж", photo: "Kitty.png"},
    {name: "Женя2", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"},
    {name: "Женя3", paw: "looking-for-home.png", age: "3 года", sex: "М", photo: "Zhenya.png"}
  ])
  return (
    <>
      <Component animals={animals} {...pageProps} />
    </>
  )
}