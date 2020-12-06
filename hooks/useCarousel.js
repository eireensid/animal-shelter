import {useState, useEffect} from 'react'

export default function useCarousel (items, count) {
  const lastIndex = Math.ceil(items.length / count) - 1
  const [activeIndex, setActiveIndex] = useState(0)
  const [curItems, setCurItems] = useState(items.slice(0, count))

  useEffect(() => {
    setActiveIndex(0)
    setCurItems(items.slice(0, count))
  }, [items])

  useEffect(() => {
    const startIndex = activeIndex * count
    let endIndex = startIndex + count
    if (endIndex > items.length - 1) {
      endIndex = items.length
    }
    const newCurItems = items.slice(startIndex, endIndex)
    while (newCurItems.length < count) {
      newCurItems.push(null)
    }
    setCurItems(newCurItems)
  }, [activeIndex])

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? lastIndex : activeIndex - 1)
  }
  const nextSlide = () => {
    setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1)
  }

  return { activeIndex, curItems, prevSlide, nextSlide }
}
