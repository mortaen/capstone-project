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
      energy: energy,
      fats: fats,
      carbohydrates: carbohydrates,
      fiber: fiber,
      protein: protein,
    }

    const storesArray = stores.split(',').map(item => item.trim())

    const categoriesArray = categories.split(',').map(item => item.trim())

    const addProduct = [
      ...productData,
      {
        name: productName,
        brand: brand,
        image: imgUrl,
        description: description,
        ingredients: ingredientsArray,
        stores: storesArray,
        nutritionFacts: nutritionFactsObject,
        categories: categoriesArray,
        price: price,
        id: id,
      },
    ]
    setProductData(addProduct)

    const stringifiedValue = JSON.stringify(addProduct)
    localStorage.setItem('productsLocalStorage', stringifiedValue)

    handleAddRating(0, id)
  }

  return { productData, handleAddProduct }
}
