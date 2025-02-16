import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'

const App = () => {
  const ans=useContext(UserDataContext)
  console.log(ans)
  return (
    <>
    <Routes>

      <Route path={'/'} element={<Home/>} />
      <Route path={'/login'} element={<UserLogin/>} />
      <Route path={'/signup'} element={<UserSignup/>} />
      <Route path={'/captain-login'} element={<CaptainLogin/>} />
      <Route path={'/captain-signup'} element={<CaptainSignup/>} />


    </Routes>
    
    </>
  )
}

export default App