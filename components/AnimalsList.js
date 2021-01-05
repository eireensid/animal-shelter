import {useState, useEffect} from 'react'
import usePagination from '~/hooks/usePagination'
import AnimalCard from '~/components/AnimalCard'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import styles from '~/styles/components/AnimalsList.module.scss'

export default function AnimalsList({animals}) {
  // const galleryAnimals = animals.slice(0, 12)

  const [animal, setAnimal] = useState("Все животные")
  const [age, setAge] = useState(undefined)

  // const _animals = [...animals]
  // while (_animals.length % 3 !== 0) {
  //   _animals.push(null)
  // }

  const [sortedAnimals, setSortedAnimals] = useState(animals)

  useEffect(() => {
    setSortedAnimals(animals)
  }, [animals])

  const [filter, setFilter] = useState(null)
  const setFilter1 = () => {
    if (filter) {
      localStorage.setItem('currentPaw', filter)
    }
    let newArr = animals.filter((item, index) => {
      const isPaw = !filter || item.paw.some(p => filter === p)
      const isType = !animal || ((item.type === 'cat' && animal === 'Кошки') || (item.type === 'dog' && animal === 'Собаки') || animal === 'Все животные') 
      return isPaw && isType
    })
    setSortedAnimals(newArr)
  }

  useEffect(() => {
    console.log('animal watch', animal)
    setFilter1()
  }, [filter, animal])

  // filter records by search text
  const searchData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setSortedAnimals(animals);
    else {
      const filteredData = animals.filter(item => {
        return item.name.toLowerCase().includes(value)
      });
      setSortedAnimals(filteredData);
    }
  }

  
  return <>
    <div className={styles.animalsListBlock}>
      <div className={styles.animalFiltersBlock}>
        <div className={styles.animalInputsBlock}>
          <div className={styles.findAnimalInputBlock}>
            <FindAnimalInput animals={animals} value={animal} options={["Кошки", "Собаки", "Все животные"]} onChange={v => setAnimal(v)}/>
            <FindAnimalInput animals={animals} placeholder="Все возраста" value={age} options={["до 6 мес.", "6 мес. - 1 год", "1-3 года", "3-7 лет", "от 7 лет"]} onChange={v => setAge(v)}/>
          </div>
          <SearchInput animals={animals} searchData={searchData}/>
        </div>
        <div className={styles.animalFilterWrapper}>
          <div className={styles.animalFilterWrapperTop}>            
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="looking-for-home.png"/>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="need-adoptation.png"/>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="baby-pets.png"/>
          </div>
          <div className={styles.animalFilterWrapperBottom}>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="need-guardian.png"/>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="undergo-treatment.png"/>
          </div>
        </div>
        <div className={styles.animalFilterWrapperMobile}>
          <div className={styles.animalFilterWrapperTopMobile}>            
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="looking-for-home.png"/>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="need-adoptation.png"/>
          </div>
          <div className={styles.animalFilterWrapperMiddleMobile}>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="need-guardian.png"/>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="baby-pets.png"/>
          </div>
          <div className={styles.animalFilterWrapperBottomMobile}>
            <PawLabel animals={animals} filter={filter} setFilter={setFilter} paw="undergo-treatment.png"/>
          </div>
        </div>
      </div>

      <div className={styles.ourPetsGallery}>
        
        {sortedAnimals.map((animal, index) => (
          <AnimalCard parent="shelter" filter={filter} animal={animal} key={index}/>
        ))}
      </div>
    </div>
  </>
}