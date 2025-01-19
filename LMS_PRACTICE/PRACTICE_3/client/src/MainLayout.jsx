import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <main>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
    </main>
  )
}

export default MainLayout