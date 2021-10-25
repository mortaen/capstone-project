import { useState } from 'react'

export default function useSearch({ productData }) {
  const { search } = window.location
  const query = new URLSearchParams(search).get('search')

  const [searchQuery, setSearchQuery] = useState(query || '')

  let searchResults
  if (searchQuery !== '') {
    const nameResults = productData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const brandResults = productData.filter(product =>
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const descriptionResults = productData.filter(product =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const ingredientsResults = productData.filter(product =>
      product.ingredients.some(
        ingredient => ingredient.toLowerCase() === searchQuery.toLowerCase()
      )
    )

    const storesResults = productData.filter(product =>
      product.stores.some(
        store => store.toLowerCase() === searchQuery.toLowerCase()
      )
    )

    const categoriesResults = productData.filter(product =>
      product.categories.some(
        category => category.toLowerCase() === searchQuery.toLowerCase()
      )
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

  return { searchQuery, setSearchQuery, searchResults }
}
