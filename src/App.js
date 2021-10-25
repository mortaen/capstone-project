import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductRoute from './components/DetailsPage/ProductRoute'
import Navigation from './components/Navigation/Navigation'
import ProductForm from './components/ProductForm/ProductForm'
import Products from './components/Products/Products'
import useCategories from './hooks/useCategories'
import useProduct from './hooks/useProduct'
import useRating from './hooks/useRating'
import useSearch from './hooks/useSearch'

function App({ initialData }) {
  const {
    filterCategories,
    activeCategory,
    setActiveCategory,
    handleCategoryClick,
    handleAddCategories,
  } = useCategories()

  const { ratings, handleAddRating } = useRating()

  const { productData, handleAddProduct } = useProduct({
    initialData,
    handleAddRating,
  })

  const { searchQuery, setSearchQuery, searchResults } = useSearch({
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
          <Products
            shownData={shownData}
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filterCategories={filterCategories}
            onAddRating={handleAddRating}
            ratings={ratings}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
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
        <Route>404 NOT FOUND</Route>
      </Switch>
      <Navigation />
    </Router>
  )
}

export default App
