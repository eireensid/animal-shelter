import {useState} from 'react'
import useDropdown from '~/hooks/useDropdown'
import styles from '~/styles/components/FindAnimalInput.module.scss'

export default function FindAnimalInput({value, placeholder, options, onChange}) {
  const { dropdownStyles, openDropdownClicks, wrapperRefs, closeDropdown } = useDropdown(1)

  const handleChange = selectedValue => {
    onChange(selectedValue)
    closeDropdown()
  }

  return <>
    <div ref={wrapperRefs[0]} className={styles.animalFilterInputBlock}>
        <div onClick={openDropdownClicks[0]} className={dropdownStyles[0].display === "none" ? styles.animalFilterInput : styles.animalFilterInputBorder}>
          <h4>{value || placeholder}</h4>
          <img src="img/input-arrow-down.png"/>
        </div>       
        <ul style={dropdownStyles[0]} className={styles.dropdownMenu}>
          {options.map((opt, ind) => (
            <li className={styles.dropdownMenuItem} onClick={e => handleChange(opt)} key={ind}>
              {opt}
            </li>
          ))}
        </ul>
    </div>
  </>
}