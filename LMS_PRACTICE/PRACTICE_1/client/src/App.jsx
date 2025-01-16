
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'

function App() {

  const appRouter=  createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:'/',
          element:<>
          <HeroSection/>
          {/* Courses PAge */}
          </>
        },{
          path:'login',
          element:<Login/>
        }
      ]
    }
  ])
  

  return (
    <main>
     <RouterProvider router={appRouter}/>
    </main>
  )
}

export default App
