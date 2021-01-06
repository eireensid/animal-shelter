import {useState, useEffect} from 'react'
import styles from '~/styles/components/PawLabel.module.scss'

export default function PawLabel({paw, filter, setFilter, disable}) {
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
    } else if (paw === "heart.png") {
      setPawMeaning("Уже дома")
    }
  }

  useEffect(changePawMeaning, [paw])



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

  const changeStyleOn = () => {
    console.log('changeStyleOn paw', paw)
    if (paw === "looking-for-home.png") {
      setFilterStyle({background: "#108D0D"})
    } else if (paw === "need-adoptation.png") {
      setFilterStyle({background: "#FF6B00"})
    } else if (paw === "need-guardian.png") {
      setFilterStyle({background: "#0038FF"})
    } else if (paw === "undergo-treatment.png") {
      setFilterStyle({background: "#E4000E"})
    } else if (paw === "baby-pets.png") {
      setFilterStyle({background: "#FF3093"})
    }
    setImgStyle({display: "none"})
  }

  const changeStyleOff = () => {
    setFilterStyle({background: "white"})
    setImgStyle({display: "inline-block"})
  }


  const doFilter = () => {
    if (disable) return
    changeStyle()
    if (filter !== paw) {
      setFilter(paw)
    } else {
      setFilter(null)
    }
  }

  const changeByUrlParam = () => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('filter')) {
      const newFilter = urlParams.get('filter') + '.png'
      if (newFilter === paw) {
        console.log('changeStyleOn changeByUrlParam work')
        changeStyleOn()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('change-url-param', changeByUrlParam)
    
    return () => {
      document.removeEventListener('change-url-param', changeByUrlParam)
    }
  }, [])

  useEffect(() => {
    if (filter !== paw) {
      changeStyleOff()
    }
  }, [filter])

  return <>
    <div onClick={doFilter} style={filterStyle} className={filterStyle.background !== "white" ? styles.animalFilterFocus : styles.animalFilter}>
      {paw && <img style={imgStyle} src={`/img/paws/${paw}`}/>}
      <h4>{pawMeaning}</h4>
    </div>
  </>
}