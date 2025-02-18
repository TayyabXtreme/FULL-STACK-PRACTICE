import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import { CaptainDataContext } from './context/CaptainContext'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogut from './pages/CaptainLogut'
import Ridding from './pages/Ridding'

const App = () => {
  const ans=useContext(UserDataContext)
  const cap=useContext(CaptainDataContext)
  console.log(ans,cap)
  return (
    <>
    <Routes>

      <Route path={'/'} element={<Start/>} />
      <Route path={'/login'} element={<UserLogin/>} />
      <Route path={'/signup'} element={<UserSignup/>} />
      <Route path={'/captain-login'} element={<CaptainLogin/>} />
      <Route path={'/captain-signup'} element={<CaptainSignup/>} />
      <Route path='/home' element={<UserProtectWrapper><Home/></UserProtectWrapper>} />
      <Route path='/user/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>} />
      <Route path='/captain/logout' element={<CaptainProtectWrapper><CaptainLogut/></CaptainProtectWrapper>} />
      <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} /> 
      <Route path='/ridding' element={<Ridding/>} />
    </Routes>
    
    </>
  )
}

export default App