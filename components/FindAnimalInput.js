import {useState} from 'react'
import useDropdown from '~/hooks/useDropdown'
import styles from '~/styles/components/FindAnimalInput.module.scss'

export default function FindAnimalInput({value, placeholder, options, onChange}) {
  const { dropdownStyles, openDropdownClicks, wrapperRefs } = useDropdown(1)

  const [open, setOpen] = useState(false);
  const handleChange = selectedValue => {
    onChange(selectedValue)
    setOpen(false)
  }

  return <>
    {wrapperRefs.map((wrapperRef, ind) => (
      <div ref={wrapperRef} className={styles.animalFilterInputBlock} key={ind}>
          <div onClick={e => setOpen(!open)} className={open === false ? styles.animalFilterInput : styles.animalFilterInputBorder}>
            <h4>{value || placeholder}</h4>
            <img src="img/input-arrow-down.png"/>
          </div>
          {open && (
          <ul className={styles.dropdownMenu}>
            {options.map((opt, ind) => (
              <li className={styles.dropdownMenuItem} onClick={e => handleChange(opt)} key={ind}>
                {opt}
              </li>
            ))}
          </ul>
          )}
      </div>
    ))}
  </>
}