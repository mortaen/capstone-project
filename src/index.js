import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import productData from './data.json'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App productData={productData} />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
