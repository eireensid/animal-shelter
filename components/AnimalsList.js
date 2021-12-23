import {useState, useEffect} from 'react'
import axios from 'axios'
import usePagination from '~/hooks/usePagination'
import Pagination from '~/components/Pagination'
import AnimalCard from '~/components/AnimalCard'
import FindAnimalInput from '~/components/FindAnimalInput'
import SearchInput from '~/components/SearchInput'
import PawLabel from '~/components/PawLabel'
import styles from '~/styles/components/AnimalsList.module.scss'
import { transformPets } from '~/modules/front/app'


export default function AnimalsList() {

  const [animals, setAnimals] = useState([])
  const [filter, setFilter] = useState(null)
  const [animal, setAnimal] = useState("all")
  const [age, setAge] = useState("all")

  const changeByUrlParam = () => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('animal')) {
      const newAnimal = urlParams.get('animal')
      setFilter(null)
      setAnimal(newAnimal)
    }
    if (urlParams.has('filter')) {
      const newFilter = urlParams.get('filter') + '.png'
      setAnimal("all")
      setFilter(newFilter)
    }
  }

  useEffect(async () => {
    changeByUrlParam()
    document.addEventListener('change-url-param', changeByUrlParam)

    const res = await axios.post('/api/pet/list', { type: 'shelter', itemCount: 300, pageNum: 1})
    setAnimals(res.data.items.map(transformPets))
    
    return () => {
      document.removeEventListener('change-url-param', changeByUrlParam)
    }
  }, [])

  const [sortedAnimals, setSortedAnimals] = useState(animals)

  useEffect(() => {
    setSortedAnimals(animals)
  }, [animals])

  const ageOptions = [
    {title: "до 6 мес.", value: '1', filter: {to: 6}},
    {title: "6 мес. - 1 год", value: '2', filter: {from: 6, to: 12}},
    {title: "1-3 года", value: '3', filter: {from: 12, to: 36}},
    {title: "3-7 лет", value: '4', filter: {from: 36, to: 84}},
    {title: "от 7 лет", value: '5', filter: {from: 84}},
    {title: "Все возрасты", value: 'all', filter: {}}
  ]

  const setFilter1 = () => {
    if (filter) {
      localStorage.setItem('currentPaw', filter)
    }
    let _age = ageOptions.find(a => a.value === age)
    _age = _age ? _age.filter : null
    // console.log('_age', _age)
    let newArr = animals.filter((item, index) => {
      const isPaw = !filter || item.paw.some(p => filter === p)
      const isType = !animal || ((item.type === animal) || animal === 'all')
      const isAge = !_age || (item.month && ((!_age.from && !_age.to) || ((!_age.from || item.month > _age.from) && (!_age.to || item.month <= _age.to))))
      return isPaw && isType && isAge
    })
    setSortedAnimals(newArr)
  }

  // Pagination
  const PER_PAGE = 12
  const count = Math.ceil(sortedAnimals.length / PER_PAGE)
  const _DATA = usePagination(sortedAnimals, PER_PAGE)

  useEffect(() => {
    // console.log('animal watch', animal)
    if (_DATA.currentPage !== 1) {
      _DATA.jump(1)
    }
    setFilter1()
  }, [filter, animal, age])

  // filter records by search text
  const searchData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    // console.log('searchData lowercasedValue', lowercasedValue)
    if (lowercasedValue === "") {
      // console.log('searchData set all')
      // setFilter(null)
      // setAnimal('all')
      // setSortedAnimals(animals);
      setFilter1()
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
    {title: "Все животные", value: "all"}
  ]
  
  return <>
    <div id="gallery" className={styles.animalsListBlock}>
      <div className={styles.animalFiltersBlock}>
        <div className={styles.animalInputsBlock}>
          <div className={styles.findAnimalInputBlock}>
            <FindAnimalInput value={animal} options={animalOptions} onChange={v => setAnimal(v)}/>
            <FindAnimalInput value={age} options={ageOptions} onChange={v => setAge(v)}/>
          </div>
          <SearchInput animals={animals} searchData={searchData}/>
        </div>
        <div className={styles.animalFilterWrapper}>
          <div className={styles.animalFilterWrapperTop}>            
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="looking-for-home.png"/>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="need-adoptation.png"/>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="baby-pets.png"/>
          </div>
          <div className={styles.animalFilterWrapperBottom}>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="need-guardian.png"/>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="undergo-treatment.png"/>
          </div>
        </div>
        <div className={styles.animalFilterWrapperMobile}>
          <div className={styles.animalFilterWrapperTopMobile}>            
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="looking-for-home.png"/>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="need-adoptation.png"/>
          </div>
          <div className={styles.animalFilterWrapperMiddleMobile}>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="need-guardian.png"/>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="baby-pets.png"/>
          </div>
          <div className={styles.animalFilterWrapperBottomMobile}>
            <PawLabel isSetOn={true} animals={animals} filter={filter} setFilter={setFilter} paw="undergo-treatment.png"/>
          </div>
        </div>
      </div>

      <div className={styles.ourPetsGallery}>
        {_DATA.currentData().map((animal, index) => (
          <AnimalCard parent="shelter" filter={filter} animal={animal} key={index}/>
        ))}
      </div>
      <div className={styles.paginationBlock}>
        <Pagination count={count} _DATA={_DATA} />
      </div>
    </div>
  </>
}