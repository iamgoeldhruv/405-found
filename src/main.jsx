import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, Routes,RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
// import './index.css'
import Trade from './trade/Trade.jsx'
import { Layout } from './layout.jsx'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import BorrrowFromUser from './borrowFromuser/BorrrowFromUser.jsx'
import GetLoan from './getLoan/GetLoan.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/trade' element={<Trade/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/borrowFromuser' element={<BorrrowFromUser/>} />
      <Route path='/getLoan' element={<GetLoan/>} />
      {/* <Route path='*' element={}/> */}


     
      </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
