import {useState} from 'react'
import styles from '~/styles/components/SearchInput.module.scss'

export default function SearchInput() {
  const [searchInputStyle, setSearchInputStyle] = useState({background: "white", flexDirection: "row"})
  const changeInputStyle = () => {
    if (searchInputStyle.background === "white" &&  searchInputStyle.flexDirection === "row") {
      setSearchInputStyle({background: "red", flexDirection: "row-reverse"})
    } else {
      setSearchInputStyle({background: "white", flexDirection: "row"})
    }
  }

  return <>
    <div style={searchInputStyle} className={styles.searchInput}>
      <img src="img/search-icon.png"/>
      <input onClick={changeInputStyle} type="text" placeholder="Имя питомца"/>
    </div>
  </>
}