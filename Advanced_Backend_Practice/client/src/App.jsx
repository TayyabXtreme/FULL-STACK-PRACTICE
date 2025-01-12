import React, { useState } from 'react'

import  './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
const App = () => {
  
  return (
    <RouterProvider router={appRouter}/>
    
  )
}

export default App