import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [input, setInput] = useState({
        email:'',
        password:''
    })
    const loginHandler=(e)=>{
        e.preventDefault()
        console.log(input)
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-16 mb-10' src="https://www.recruitics.com/hubfs/uber%20Logo.png" alt="" />
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
       <p className='text-center'>New here?  <Link
       to={'/signup'}
        className='text-blue-600'
        >Create new Account</Link></p>
        </form>
        </div>
        <div>
            <Link
            to={'/captain-login'}
            className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2  w-full text-lg ' >Sign as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin