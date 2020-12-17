import {useState, useEffect, useRef} from 'react'

export default function useDropdown (count) {
  const dropdownStyles = []
  const setDropdownStyles = []
  const openDropdownClicks = []
  const wrapperRefs = []

  for (let i = 0; i < count; i++) {
    const wrapperRef = useRef()
    wrapperRefs.push(wrapperRef)

    const [dropdownStyle, setDropdownStyle] = useState({display: "none"})
    dropdownStyles.push(dropdownStyle)
    setDropdownStyles.push(setDropdownStyle)
    const index = i
    const openDropdownClick = (e) => {
      e.preventDefault()
      const dropdownStyle = dropdownStyles[index]
      const setDropdownStyle = setDropdownStyles[index]
      if (dropdownStyle.display === "none") {
        setDropdownStyle({display: "block"})
      } else {
        setDropdownStyle({display: "none"})
      }
      for (let j = 0; j < count; j++) {
        if (j !== index) {
          const setDropdownStyle = setDropdownStyles[j]
          setDropdownStyle({display: "none"})
        }
      }
    }
    openDropdownClicks.push(openDropdownClick)
  }

  const handleClick = e => {
    for (let i = 0; i < count; i++) {
      const wrapperRef = wrapperRefs[i]
      if (wrapperRef.current.contains(e.target) || e.target === wrapperRef.current) {
        console.log('handleClick retunr')
        return
      }
    }
    for (let i = 0; i < count; i++) {
      const setDropdownStyle = setDropdownStyles[i]
      setDropdownStyle({display: "none"})
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return { dropdownStyles, openDropdownClicks, wrapperRefs }
}
