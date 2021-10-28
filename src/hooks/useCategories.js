import { useState } from 'react'

export default function useCategories() {
  const initialCategories = ['plant milk', 'plant yoghurt', 'meat alternative']

  const [productCategories, setProductCategories] = useState(() => {
    if (localStorage.getItem('categoriesLocalStorage')) {
      return JSON.parse(localStorage.getItem('categoriesLocalStorage'))
    } else {
      return initialCategories
    }
  })

  const [activeCategory, setActiveCategory] = useState('')

  function handleCategoryClick(category) {
    setActiveCategory(category)
  }

  function handleAddCategories({ categories }) {
    const categoriesArray = categories.split(',').map(item => item.trim())
    let newCategories = productCategories

    categoriesArray.forEach(function (category) {
      if (!newCategories.includes(category)) {
        newCategories.push(category)
      }
    })

    setProductCategories(newCategories)

    const stringifiedValue = JSON.stringify(newCategories)
    localStorage.setItem('categoriesLocalStorage', stringifiedValue)
  }
  return {
    productCategories,
    activeCategory,
    setActiveCategory,
    handleCategoryClick,
    handleAddCategories,
  }
}
