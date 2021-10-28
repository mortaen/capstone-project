import { useState } from 'react'
import { useLocation } from 'react-router'
import filterArray from '../utils/filterArray'
import filterString from '../utils/filterString'

export default function useSearch({ productData }) {
  const { search } = useLocation()
  const query = new URLSearchParams(search).get('search')

  const [searchQuery, setSearchQuery] = useState(query || '')

  function handleSearchInput(input) {
    setSearchQuery(input)
  }

  let searchResults
  if (searchQuery !== '') {
    const nameResults = filterString(productData, searchQuery, 'name')

    const brandResults = filterString(productData, searchQuery, 'brand')

    const descriptionResults = filterString(
      productData,
      searchQuery,
      'description'
    )

    const ingredientsResults = filterArray(
      productData,
      searchQuery,
      'ingredients'
    )

    const storesResults = filterArray(productData, searchQuery, 'stores')

    const categoriesResults = filterArray(
      productData,
      searchQuery,
      'categories'
    )

    searchResults = [].concat(
      nameResults,
      brandResults,
      descriptionResults,
      ingredientsResults,
      storesResults,
      categoriesResults
    )

    // remove duplicates
    searchResults = searchResults.filter((product, index) => {
      return searchResults.indexOf(product) === index
    })
  } else {
    searchResults = productData
  }

  return { searchQuery, handleSearchInput, searchResults }
}
