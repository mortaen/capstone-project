import { useState } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import ProductForm from './components/ProductForm/ProductForm'
import Products from './components/Products/Products'

function App({ initialData }) {
  const [productData, setProductData] = useState(() => {
    if (localStorage.getItem('productsLocalStorage')) {
      return JSON.parse(localStorage.getItem('productsLocalStorage'))
    } else {
      return initialData
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
      },
    ]
    setProductData(addProduct)

    const stringifiedValue = JSON.stringify(addProduct)
    localStorage.setItem('productsLocalStorage', stringifiedValue)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products productData={productData} />
        </Route>
        <Route exact path="/product-form">
          <ProductForm onAddProduct={handleAddProduct} />
        </Route>
      </Switch>
      <Navigation />
    </Router>
  )
}

export default App
