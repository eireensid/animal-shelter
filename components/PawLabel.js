import {useState} from 'react'
import styles from '~/styles/components/PawLabel.module.scss'

export default function PawLabel({pawColor, pawMeaning}) {
  const [filterStyle, setFilterStyle] = useState({background: "white"})
  const [imgStyle, setImgStyle] = useState({display: "inline-block"})

  const changeStyle = () => {
    if (filterStyle.background === "white") {
      setFilterStyle({background: "red"})
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
    <div onClick={changeStyle} style={filterStyle} className={styles.animalFilter}>
      <img style={imgStyle} src={`${pawColor}`}/>
      <h4>{pawMeaning}</h4>
    </div>
  </>
}