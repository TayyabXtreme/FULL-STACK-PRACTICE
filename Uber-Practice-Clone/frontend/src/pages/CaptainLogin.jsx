import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainLogin = () => {
    const navigate=useNavigate()
    const {captain,setCaptain}=useContext(CaptainDataContext)
     const [input, setInput] = useState({
            email:'',
            password:''
        })
        const loginHandler=async(e)=>{
    
            e.preventDefault()
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,input)
            if(response.status==200){
                const data=response.data
                setCaptain(data.captain)
                localStorage.setItem('token',data.token)
                navigate('/captain-home')
            }
            console.log(input)
        }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-20 mb-10' src="https://images.squarespace-cdn.com/content/v1/5f12108f09f6c26e19eab384/1595024071484-A6VUH95AXO829RJY19LK/image-asset.jpeg" alt="" />
        <form onSubmit={(e)=>loginHandler(e)}>
        <h3 className='text-lg font-medium mb-2' >What's your email</h3>
        <input
            value={input.email}
            onChange={(e) => setInput((val) => ({ ...val, email: e.target.value }))}
        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" required placeholder='email@example.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input
        value={input.password}
        onChange={(e) => setInput((val) => ({ ...val, password: e.target.value }))}
        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" required placeholder='password' />
        <button
        className='bg-[#111] mb-3 text-white font-semibold rounded px-4 py-2  w-full text-lg '
        >Login</button>
       <p className='text-center'>Join a fleet?  <Link
       to={'/captain-signup'}
        className='text-blue-600'
        >Register as a Captain</Link></p>
        </form>
        </div>
        <div>
            <Link
            to='/login'
            className='bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2  w-full text-lg ' >Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin