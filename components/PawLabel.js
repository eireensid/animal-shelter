import {useState, useEffect} from 'react'
import styles from '~/styles/components/PawLabel.module.scss'

export default function PawLabel({paw, animals, filters, setFilters}) {
  const [filterStyle, setFilterStyle] = useState({background: "white"})
  const [imgStyle, setImgStyle] = useState({display: "inline-block"})

  const [pawMeaning, setPawMeaning] = useState("")

  const changePawMeaning = () => {
    if (paw === "looking-for-home.png") {
      setPawMeaning("Ищут дом")
    } else if (paw === "need-adoptation.png") {
      setPawMeaning("Нужна адаптация")
    } else if (paw === "need-guardian.png") {
      setPawMeaning("Нужен опекун")
    } else if (paw === "undergo-treatment.png") {
      setPawMeaning("Проходят лечение")
    } else if (paw === "baby-pets.png") {
      setPawMeaning("Малыши")
    }
  }

  useEffect(changePawMeaning, [])

  const changeStyle = () => {
    if (filterStyle.background === "white") {
      if (pawMeaning=="Ищут дом") {
      setFilterStyle({background: "#108D0D"})
      } else if (pawMeaning=="Малыши") {
        setFilterStyle({background: "#FF3093"})
      } else if (pawMeaning=="Нужна адаптация") {
        setFilterStyle({background: "#FF6B00"})
      } else if (pawMeaning=="Нужен опекун") {
        setFilterStyle({background: "#0038FF"})
      } else if (pawMeaning=="Проходят лечение") {
        setFilterStyle({background: "#E4000E"})
      }
    } else {
      setFilterStyle({background: "white"})
    }
    
    if (imgStyle.display === "inline-block") {
      setImgStyle({display: "none"})
    } else {
      setImgStyle({display: "inline-block"})
    }
  }

  const setFilter = () => {
    if (filters.indexOf(paw) === -1) {
      setFilters([...filters, paw])
    } else {
      const newFilters = filters.filter(e => e !== paw)
      setFilters(newFilters)
    }
  }

  const filter = () => {
    changeStyle()
    setFilter()
  }

  return <>
    <div onClick={filter} style={filterStyle} className={filterStyle.background !== "white" ? styles.animalFilterFocus : styles.animalFilter}>
      <img style={imgStyle} src={'/img/paws/' + paw}/>
      <h4>{pawMeaning}</h4>
    </div>
  </>
}