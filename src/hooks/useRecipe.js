import { useState } from 'react'

export default function useRecipe({ initialRecipeData }) {
  const [recipeData, setRecipeData] = useState(() => {
    if (localStorage.getItem('recipesLocalStorage')) {
      return JSON.parse(localStorage.getItem('recipesLocalStorage'))
    } else {
      return initialRecipeData
    }
  })

  function handleAddRecipe({
    recipeName,
    instructions,
    ingredients,
    imgUrl,
    id,
  }) {
    const ingredientsArray = ingredients.split(',').map(item => item.trim())

    const addRecipe = [
      {
        name: recipeName,
        instructions: instructions,
        ingredients: ingredientsArray,
        image: imgUrl,
        id: id,
      },
      ...recipeData,
    ]

    setRecipeData(addRecipe)

    const stringifiedValue = JSON.stringify(addRecipe)
    localStorage.setItem('recipesLocalStorage', stringifiedValue)
  }

  return { recipeData, handleAddRecipe }
}
