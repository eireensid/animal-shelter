import { useState } from "react";

export default function usePagination(data, totalCount) {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = totalCount

  function currentData() {
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