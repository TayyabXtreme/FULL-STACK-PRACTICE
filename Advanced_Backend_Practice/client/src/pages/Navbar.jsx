import { Button } from '@/components/ui/button'
import axios from 'axios'
import React from 'react'

const Navbar = () => {
  const logoutHandler =async()=>{
    try {
      const res=await axios.get("http://localhost:8000/api/v1/user/logout")
      if(res.data.success){
        alert(res.data.message)
      }

    } catch (error) {
      console.log(error)
      alert(error.respnose.data.message)
    }
  }
  return (
    <div className='bg-gray-600'>
      <div className='p-2 flex items-center justify-between'>
      <h1 className='font-bold text-lg'>{"Xtrem MERN"}</h1>
      <Button onClick={logoutHandler}>Logout</Button>

      </div>
       
    </div>
  )
}

export default Navbar