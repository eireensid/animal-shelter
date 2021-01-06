import {useState, useEffect} from 'react'
import usePagination from '~/hooks/usePagination'
import Pagination from '~/components/Pagination'
import AnimalCard from '~/components/AnimalCard'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import styles from '~/styles/components/AnimalsList.module.scss'


export default function AnimalsList({animals}) {

  const [filter, setFilter] = useState(null)
  const [animal, setAnimal] = useState("all")
  const [age, setAge] = useState("Все возраста")

  const changeByUrlParam = () => {
    console.log('changeByUrlParam')
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('animal')) {
      console.log('set animal')
      const newAnimal = urlParams.get('animal')
      setFilter(null)
      setAnimal(newAnimal)
    }
    if (urlParams.has('filter')) {
      const newFilter = urlParams.get('filter') + '.png'
      console.log('set filter', newFilter)
      setAnimal("all")
      setFilter(newFilter)
    }
  }

  useEffect(() => {
    changeByUrlParam()
    document.addEventListener('change-url-param', changeByUrlParam)
    
    return () => {
      document.removeEventListener('change-url-param', changeByUrlParam)
    }
  }, [])

  // const _animals = [...animals]
  // while (_animals.length % 3 !== 0) {
  //   _animals.push(null)
  // }

  const [sortedAnimals, setSortedAnimals] = useState(animals)

  useEffect(() => {
    setSortedAnimals(animals)
  }, [animals])

  const setFilter1 = () => {
    if (filter) {
      localStorage.setItem('currentPaw', filter)
    }
    let newArr = animals.filter((item, index) => {
      const isPaw = !filter || item.paw.some(p => filter === p)
      const isType = !animal || ((item.type === animal) || animal === 'all') 
      // const isAge = !age || (item.age === "1 год" || item.age === "2 года" || item.age === "3 года" && age === "1-3 года")
      return isPaw && isType// && isAge
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
    console.log('searchData lowercasedValue', lowercasedValue)
    if (lowercasedValue === "") {
      console.log('searchData set all')
      setFilter(null)
      setAnimal('all')
      setSortedAnimals(animals);
    } else {
      const filteredData = animals.filter(item => {
        return item.name.toLowerCase().includes(lowercasedValue)
      });
      setSortedAnimals(filteredData);
    }
  }

  const animalOptions = [
    {title: "Кошки", value: "cat"},
    {title: "Собаки", value: "dog"},
    {title: "Все", value: "all"}
  ]

  
  return <>
    <div id="gallery" className={styles.animalsListBlock}>
      <div className={styles.animalFiltersBlock}>
        <div className={styles.animalInputsBlock}>
          <div className={styles.findAnimalInputBlock}>
            <FindAnimalInput value={animal} options={animalOptions} onChange={v => setAnimal(v)}/>
            <FindAnimalInput value={age} options={["до 6 мес.", "6 мес. - 1 год", "1-3 года", "3-7 лет", "от 7 лет", "Все"]} onChange={v => setAge(v)}/>
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
      <div className={styles.paginationBlock}>
        <Pagination />
      </div>
    </div>
  </>
}