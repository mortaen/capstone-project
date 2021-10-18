import { useState } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductRoute from './components/DetailsPage/ProductRoute'
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

  const [activeCategory, setActiveCategory] = useState('')

  function handleCategoryClick(category) {
    setActiveCategory(category)
  }

  let shownData
  if (activeCategory !== '') {
    shownData = productData.filter(product =>
      product.categories.includes(activeCategory)
    )
  } else {
    shownData = productData
  }

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
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products
            shownData={shownData}
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />
        </Route>
        <Route exact path="/product-form">
          <ProductForm onAddProduct={handleAddProduct} />
        </Route>
        <Route exact path="/product-details/:id">
          <ProductRoute productData={productData} />
        </Route>
        <Route>404 NOT FOUND</Route>
      </Switch>
      <Navigation />
    </Router>
  )
}

export default App
