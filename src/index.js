import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import initialData from './data.json'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App initialData={initialData} />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
