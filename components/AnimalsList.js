import {useState, useEffect} from 'react'
import usePagination from '~/hooks/usePagination'
import AnimalCard from '~/components/AnimalCard'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import styles from '~/styles/components/AnimalsList.module.scss'

export default function AnimalsList({animals}) {
  // const galleryAnimals = animals.slice(0, 12)

  const [animal, setAnimal] = useState(undefined)
  const [age, setAge] = useState(undefined)

  // const _animals = [...animals]
  // while (_animals.length % 3 !== 0) {
  //   _animals.push(null)
  // }

  const [sortedAnimals, setSortedAnimals] = useState(animals)

const [filter, setFilter] = useState(null)
  useEffect(() => {
    setSortedAnimals(animals)
  }, [animals])

  const setFilter1 = () => {
    let newArr = animals.filter((animal, index) => {
      return animal.paw.some(p => filter === p)
    })
    if (!filter) {
      newArr = animals
    }
    setSortedAnimals(newArr)
  }

  useEffect(() => {
    setFilter1()
  }, [filter])


  const [searchResult, setSearchResult] = useState([])
  
  return <>
    <div className={styles.animalsListBlock}>
      <div className={styles.animalFiltersBlock}>
        <div className={styles.animalInputsBlock}>
          <div className={styles.findAnimalInputBlock}>
            <FindAnimalInput placeholder="Все животные" value={animal} options={["Кошки", "Собаки"]} onChange={v => setAnimal(v)}/>
            <FindAnimalInput placeholder="Все возраста" value={age} options={["до 6 мес.", "6 мес. - 1 год", "1-3 года", "3-7 лет", "от 7 лет"]} onChange={v => setAge(v)}/>
          </div>
          <SearchInput animals={animals} setSearchResult={setSearchResult}/>
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
        {searchResult.map((animal, index) => (
          <AnimalCard parent="shelter" filter={null} animal={animal} key={index}/>
        ))}
        {sortedAnimals.map((animal, index) => (
          <AnimalCard parent="shelter" filter={filter} animal={animal} key={index}/>
        ))}
      </div>
    </div>
  </>
}