import {useState} from 'react'
import styles from '~/styles/components/SearchInput.module.scss'

export default function SearchInput() {
  const [searchInputStyle, setSearchInputStyle] = useState({border: "none", flexDirection: "row"})
  const [searchInputImgDivStyle, setSearchInputImgDivStyle] = useState({background: "none"})
  const [searchInputImgStyle, setSearchInputImgStyle] = useState({fill: "#131313"})
  const changeFocusInputStyle = () => {
    setSearchInputStyle({border: "1px solid #EA4D08", flexDirection: "row-reverse"})
    setSearchInputImgStyle({fill: "white", opacity: "1"})
    setSearchInputImgDivStyle({background: "#EA4D08"})
  }
  const changeBlurInputStyle = () => {
    console.log("changeBlurInputStyle")
    setSearchInputStyle({border: "none", flexDirection: "row"})
    setSearchInputImgStyle({fill: "#131313"})
    setSearchInputImgDivStyle({background: "none"})
  }
  const changeStyleHover = () => {
    console.log("changeStyleHover")
    if (searchInputImgDivStyle.background === "#EA4D08") {
      setSearchInputImgDivStyle({background: "#E48244"})
    } else {
      setSearchInputImgDivStyle({background: "#EA4D08"})
    }
    if (searchInputStyle.border === "1px solid #EA4D08" &&  searchInputStyle.flexDirection === "row-reverse") {
      setSearchInputStyle({border: "1px solid #E48244", flexDirection: "row-reverse"})
    } else {
      setSearchInputStyle({border: "1px solid #EA4D08", flexDirection: "row-reverse"})
    }
    setSearchInputImgStyle({fill: "white", opacity: "1"})
  }
  const removeHover = () => {
    console.log("removeHover")
    if (searchInputImgDivStyle.background === "#E48244") {
      setSearchInputImgDivStyle({background: "#EA4D08"})
    } else {
      setSearchInputImgDivStyle({background: "#E48244"})
    }
    if (searchInputStyle.border === "1px solid #E48244" &&  searchInputStyle.flexDirection === "row-reverse") {
      setSearchInputStyle({border: "1px solid #EA4D08", flexDirection: "row-reverse"})
    } else {
      setSearchInputStyle({border: "1px solid #E48244", flexDirection: "row-reverse"})
    }
  }
  const activeStyle = () => {
    console.log("activeStyle")
    if (searchInputImgDivStyle.background === "#E48244") {
      setSearchInputImgDivStyle({background: "#131313"})
    } else {
      setSearchInputImgDivStyle({background: "#E48244"})
    }
    if (searchInputStyle.border === "1px solid #E48244" &&  searchInputStyle.flexDirection === "row-reverse") {
      setSearchInputStyle({border: "1px solid #131313", flexDirection: "row-reverse"})
    } else {
      setSearchInputStyle({border: "1px solid #E48244", flexDirection: "row-reverse"})
    }
    setSearchInputImgStyle({fill: "white", opacity: "1"})
  }



  return <>
    <div onFocus={changeFocusInputStyle} onBlur={changeBlurInputStyle} style={searchInputStyle} className={searchInputStyle.border !== "none" ? styles.searchInputChange : styles.searchInput}>
      <div onClick={activeStyle} onMouseOver={changeStyleHover} onMouseOut={removeHover} style={searchInputImgDivStyle} className={searchInputImgDivStyle.background !== "none" ? styles.searchInputImgDivChange : ""}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path style={searchInputImgStyle} d="M14.5 13.7933L10.724 10.0173C11.6314 8.92796 12.0839 7.53072 11.9873 6.11625C11.8908 4.70179 11.2526 3.379 10.2056 2.42306C9.15861 1.46712 7.78337 0.951639 6.36598 0.983845C4.94858 1.01605 3.59817 1.59347 2.59567 2.59597C1.59316 3.59848 1.01575 4.94889 0.98354 6.36628C0.951334 7.78367 1.46682 9.15892 2.42275 10.2059C3.37869 11.2529 4.70148 11.8911 6.11595 11.9876C7.53041 12.0842 8.92765 11.6317 10.017 10.7243L13.793 14.5003L14.5 13.7933ZM2 6.5003C2 5.61029 2.26392 4.74026 2.75838 4.00024C3.25285 3.26021 3.95565 2.68344 4.77792 2.34284C5.60019 2.00225 6.50499 1.91313 7.3779 2.08677C8.25082 2.2604 9.05264 2.68899 9.68198 3.31832C10.3113 3.94766 10.7399 4.74948 10.9135 5.6224C11.0872 6.49531 10.998 7.40011 10.6575 8.22238C10.3169 9.04464 9.74008 9.74745 9.00006 10.2419C8.26004 10.7364 7.39001 11.0003 6.5 11.0003C5.30693 10.999 4.16311 10.5244 3.31948 9.68082C2.47585 8.83719 2.00132 7.69337 2 6.5003Z" opacity="0.5"/>
        </svg>
      </div>
      <input type="text" placeholder="Имя питомца"/>
    </div>
  </>
}