import {useState} from 'react'
import styles from '~/styles/components/PawLabel.module.scss'

export default function PawLabel({pawColor, pawMeaning}) {
  const [filterStyle, setFilterStyle] = useState({background: "white"})
  const [imgStyle, setImgStyle] = useState({display: "inline-block"})

  const changeStyle = () => {
    if (filterStyle.background === "white") {
      if (pawMeaning=="Ищут дом") {
      setFilterStyle({background: "#108D0D", padding: "20px 42px"})
      } else if (pawMeaning=="Малыши") {
        setFilterStyle({background: "#FF3093", padding: "20px 42px"})
      } else if (pawMeaning=="Нужна адаптация") {
        setFilterStyle({background: "#FF6B00", padding: "20px 42px"})
      } else if (pawMeaning=="Нужен опекун") {
        setFilterStyle({background: "#0038FF", padding: "20px 42px"})
      } else if (pawMeaning=="Проходят лечение") {
        setFilterStyle({background: "#E4000E", padding: "20px 42px"})
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

  return <>
    <div onClick={changeStyle} style={filterStyle} className={filterStyle.background !== "white" ? `${styles.animalFilter} ${styles.animalFilterFocus}` : styles.animalFilter}>
      <img style={imgStyle} src={`${pawColor}`}/>
      <h4>{pawMeaning}</h4>
    </div>
  </>
}