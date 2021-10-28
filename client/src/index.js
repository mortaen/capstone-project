import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import initialProductData from './productData.json'
import initialRecipeData from './recipeData.json'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App
      initialProductData={initialProductData}
      initialRecipeData={initialRecipeData}
    />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
