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
    {wrapperRefs.map(wrapperRef => (
      <div ref={wrapperRef} className={styles.animalFilterInputBlock}>
          <div onClick={e => setOpen(!open)} className={styles.animalFilterInput}>
            <h4>{value || placeholder}</h4>
            <img src="img/input-arrow-down.png"/>
          </div>
          {open && (
          <ul className="dropdown-menu">
            {options.map(opt => (
              <li className="dropdown-menu-item" onClick={e => handleChange(opt)}>
                {opt}
              </li>
            ))}
          </ul>
          )}
      </div>
    ))}
  </>
}