import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Trade from './components/Trade/Trade.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/trade' element={<Trade/>} />
     
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router}/>
  </React.StrictMode>,
)
