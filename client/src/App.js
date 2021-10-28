import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductRoute from './components/DetailsPage/ProductRoute'
import Error from './components/Error/Error'
import Navigation from './components/Navigation/Navigation'
import ProductForm from './components/ProductForm/ProductForm'
import Products from './components/Products/Products'
import Recipes from './components/Recipes/Recipes'
import useCategories from './hooks/useCategories'
import useProduct from './hooks/useProduct'
import useRating from './hooks/useRating'
import useSearch from './hooks/useSearch'
import getProducts from './services/getProducts'

function App({ initialRecipeData }) {
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    filterCategories,
    activeCategory,
    setActiveCategory,
    handleCategoryClick,
    handleAddCategories,
  } = useCategories()

  const { ratings, handleAddRating } = useRating()

  const { productData, setProductData, handleAddProduct } = useProduct({
    handleAddRating,
  })

  useEffect(() => {
    getProducts()
      .then(data => setProductData(data))
      .catch(error => setErrorMessage('Could not retrieve products'))
  }, [])

  const { searchQuery, handleSearchInput, searchResults } = useSearch({
    productData,
  })

  let shownData
  if (activeCategory !== '') {
    shownData = productData.filter(product =>
      product.categories.includes(activeCategory)
    )
  } else if (searchResults !== productData) {
    shownData = searchResults
  } else {
    shownData = productData
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {errorMessage && <Error errorMessage={errorMessage} />}
          <Products
            shownData={shownData}
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filterCategories={filterCategories}
            onAddRating={handleAddRating}
            ratings={ratings}
            searchQuery={searchQuery}
            onSearchInput={handleSearchInput}
          />
        </Route>
        <Route exact path="/product-form">
          <ProductForm
            onAddProduct={handleAddProduct}
            onAddCategories={handleAddCategories}
          />
        </Route>
        <Route exact path="/product-details/:id">
          <ProductRoute productData={productData} />
        </Route>
        <Route exact path="/recipes">
          <Recipes recipeData={initialRecipeData} />
        </Route>
        <Route>404 NOT FOUND</Route>
      </Switch>
      <Navigation />
    </Router>
  )
}

export default App
