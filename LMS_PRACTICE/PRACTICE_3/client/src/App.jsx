import React from 'react'
import { Button } from './components/ui/button'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import { RouterProvider } from 'react-router'
import Courses from './pages/student/Courses'

const App = () => {

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:'/',
          element:<>
          <HeroSection/>
          <Courses/>
          </>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    }
  ])

  return (
   <RouterProvider router={appRouter} />
  )
}

export default App