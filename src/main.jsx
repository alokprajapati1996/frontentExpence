import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateContext from './context/StateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StateContext>
    <App />
  </StateContext>,
)
 