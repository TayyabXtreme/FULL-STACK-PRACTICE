import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import Card from './components/Card'
import { useRef } from 'react'
import Dashboard from './pages/Dashboard'
import Teams from './pages/Teams'
import Project from './pages/Project'
import Calender from './pages/Calender'
import { Route, Router, Routes } from 'react-router-dom'


const App = () => {



  return (
    <>

      <Routes>
        <Route path='/' element={<Dashboard />}  />

        

        <Route path='/teams' element={<Teams />} />

      

        <Route path='/project' element={<Project />} />

    
        <Route path='/calender' element={<Calender />}/>

     


      </Routes>


    </>
  )

}

export default App