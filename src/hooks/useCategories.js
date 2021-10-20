import { useState } from 'react'

export default function useCategories() {
  const initialCategories = ['plant milk', 'plant yoghurt', 'meat alternative']

  const [filterCategories, setFilterCategories] = useState(() => {
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
    let newCategories = filterCategories

    categoriesArray.forEach(function (category) {
      if (!newCategories.includes(category)) {
        newCategories.push(category)
      }
    })

    setFilterCategories(newCategories)

    const stringifiedValue = JSON.stringify(newCategories)
    localStorage.setItem('categoriesLocalStorage', stringifiedValue)
  }
  return {
    filterCategories,
    activeCategory,
    handleCategoryClick,
    handleAddCategories,
  }
}
