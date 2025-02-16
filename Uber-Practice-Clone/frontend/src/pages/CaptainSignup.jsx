import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [input, setInput] = useState({
            fullname:{
                firstname:'',
                lastname:''
            },
                email:'',
                password:''
            })
            const signUpHandler=(e)=>{
                e.preventDefault()
                console.log(input)
            }
  return (
    <div className='py-5 px-5 flex flex-col justify-between h-screen'>
    <div>
    <img className='w-16 mb-10' src="https://images.squarespace-cdn.com/content/v1/5f12108f09f6c26e19eab384/1595024071484-A6VUH95AXO829RJY19LK/image-asset.jpeg" alt="" />
    <form onSubmit={(e)=>signUpHandler(e)}>
    <h3 className='text-lg font-medium mb-2' >What's our Captain's name</h3>
    <div className='flex gap-2 justify-between'>
        
    <input
        value={input.firstname}
        onChange={(e) => setInput((val) => ({ ...val, fullname: { ...val.fullname, firstname: e.target.value } }))}
    className='bg-[#eeee] mb-7 rounded px-4 w-1/2 py-2 border  text-lg placeholder:text-base'
    type="text" required placeholder='firstname' />
    <input
        value={input.lastname}
        onChange={(e) => setInput((val) => ({ ...val, fullname: { ...val.fullname, lastname: e.target.value } }))}
    className='bg-[#eeee] mb-7 rounded px-4 py-2 w-1/2 border  text-lg placeholder:text-base'
    type="text" required placeholder='lastname' />

    </div>
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
    >Register</button>
   <p className='text-center'>Already have account?  <Link
   to={'/captain-login'}
    className='text-blue-600'
    >Login here</Link></p>
    </form>
    </div>
    <div>
    <p className="text-xs text-gray-600">
  This site is protected by re-CAPTCHA and the 
  <a href="#" className="text-blue-500 hover:underline"> Google Privacy Policy </a> 
  and 
  <a href="#" className="text-blue-500 hover:underline"> Terms of Service </a> apply.
</p>

    </div>
</div>
  )
}

export default CaptainSignup