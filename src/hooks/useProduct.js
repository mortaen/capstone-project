import { useState } from 'react'

export default function useProduct({ initialProductData, handleAddRating }) {
  const [productData, setProductData] = useState(() => {
    if (localStorage.getItem('productsLocalStorage')) {
      return JSON.parse(localStorage.getItem('productsLocalStorage'))
    } else {
      return initialProductData
    }
  })

  function handleAddProduct({
    productName,
    brand,
    imgUrl,
    description,
    ingredients,
    stores,
    energy,
    fats,
    carbohydrates,
    fiber,
    protein,
    categories,
    price,
    id,
  }) {
    const ingredientsArray = ingredients.split(',').map(item => item.trim())

    const nutritionFactsObject = {
      energy,
      fats,
      carbohydrates,
      fiber,
      protein,
    }

    const storesArray = stores.split(',').map(item => item.trim())

    const categoriesArray = categories.split(',').map(item => item.trim())

    const addProduct = [
      {
        name: productName,
        brand: brand,
        image: imgUrl,
        description,
        ingredients: ingredientsArray,
        stores: storesArray,
        nutritionFacts: nutritionFactsObject,
        categories: categoriesArray,
        price,
        id,
      },
      ...productData,
    ]
    setProductData(addProduct)

    const stringifiedValue = JSON.stringify(addProduct)
    localStorage.setItem('productsLocalStorage', stringifiedValue)

    handleAddRating(0, id)
  }

  return { productData, handleAddProduct }
}
