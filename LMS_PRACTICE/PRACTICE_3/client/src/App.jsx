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
import SideBar from './pages/admin/SideBar'
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'
import EditCourse from './pages/admin/course/EditCourse'
import CreateLecture from './pages/admin/lecture/createLecture'
import EditLecture from './pages/admin/lecture/EditLecture'
import CourseDetail from './pages/student/CourseDetail'
import CourseProgress from './pages/student/CourseProgress'

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
        },
        {
          path:'/course-detail/:courseId',
          element:<CourseDetail/>
        },
        {
          path:'/course-progress/:courseId',
          element:<CourseProgress/>
        },
        //admin routes are start from here
        {
          path:'admin',
          element:<SideBar/>,
          children:[
            {
              path:'dashboard',
              element:<Dashboard/>
            },
            {
              path:'course',
              element:<CourseTable/>
            },
            {
              path:'course/create',
              element:<AddCourse/>
            },
            {
              path:'course/:courseId',
              element:<EditCourse/>
            },
            {
              path:'course/:courseId/lecture',
              element:<CreateLecture/>
            },
            {
              path:'course/:courseId/lecture/:lectureId',
              element:<EditLecture/>
            }
            
            
          ]
          
        }

      ],
      
    }
  ])

  return (
   <RouterProvider router={appRouter} />
  )
}

export default App