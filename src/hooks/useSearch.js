import { useState } from 'react'

export default function useSearch() {
  const { search } = window.location
  const query = new URLSearchParams(search).get('search')

  const [searchQuery, setSearchQuery] = useState(query || '')

  function searchProducts(productData, query) {
    if (!query) {
      return productData
    } else {
      const nameResults = productData.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      const brandResults = productData.filter(product =>
        product.brand.toLowerCase().includes(query.toLowerCase())
      )
      const descriptionResults = productData.filter(product =>
        product.description.toLowerCase().includes(query.toLowerCase())
      )

      const ingredientsResults = productData.filter(product =>
        product.ingredients
          .map(ingredient => ingredient.toLowerCase())
          .includes(query.toLowerCase())
      )

      const storesResults = productData.filter(product =>
        product.stores
          .map(store => store.toLowerCase())
          .includes(query.toLowerCase())
      )

      const categoriesResults = productData.filter(product =>
        product.categories
          .map(category => category.toLowerCase())
          .includes(query.toLowerCase())
      )

      let searchResults = [].concat(
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
      return searchResults
    }
  }

  return { searchQuery, setSearchQuery, searchProducts }
}
