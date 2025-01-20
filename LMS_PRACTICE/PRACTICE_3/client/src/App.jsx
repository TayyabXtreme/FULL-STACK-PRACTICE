import React from 'react'
import { Button } from './components/ui/button'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import { RouterProvider } from 'react-router'
import Courses from './pages/student/Courses'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'

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
        },
        {
          path:'/my-learning',
          element:<MyLearning/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
      ]
    }
  ])

  return (
   <RouterProvider router={appRouter} />
  )
}

export default App