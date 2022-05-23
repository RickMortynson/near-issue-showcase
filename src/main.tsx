import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { connectNear } from './near'

connectNear().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
