import { useState } from "react";

export default function usePagination(data, itemsPerPage, totalCount) {
  const [currentPage, setCurrentPage] = useState(1)
  // const maxPage = Math.ceil(data.length / itemsPerPage)
  const maxPage = totalCount

  function currentData() {
    // const begin = (currentPage - 1) * itemsPerPage
    // const end = begin + itemsPerPage
    // console.log(data)
    // return data.slice(begin, end)
    return data
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage))
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
  }

  function jump(page) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage))
  }

  return { next, prev, jump, currentData, currentPage, maxPage }
}