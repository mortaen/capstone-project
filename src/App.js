import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductRoute from './components/DetailsPage/ProductRoute'
import Navigation from './components/Navigation/Navigation'
import ProductForm from './components/ProductForm/ProductForm'
import Products from './components/Products/Products'
import Recipes from './components/Recipes/Recipes'
import useCategories from './hooks/useCategories'
import useProduct from './hooks/useProduct'
import useRating from './hooks/useRating'

function App({ initialProductData, initialRecipeData }) {
  const { handleAddCategories } = useCategories()

  const { ratings, handleAddRating } = useRating()

  const { productData, handleAddProduct } = useProduct({
    initialProductData,
    handleAddRating,
  })

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products
            onAddRating={handleAddRating}
            ratings={ratings}
            productData={productData}
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
