import React, { useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  
   const kisitag=useRef()
   const [a, seta] = useState(1)
 
   const increment=()=>{
     seta(a+1)
   
   }
 
   const decrement=()=>{
     seta(a-1)
   
   }
 
 
 
   return (
     <>
     <div className='bg-gray-700 h-screen text-white'>
       <Navbar />
 
       <h1>Dashboard</h1>
       <h1 className='flex items-center justify-center text-5xl mt-20'>{a}</h1>
       <div ref={kisitag} className='flex items-center justify-center text-lg mt-20'> 

        <Button>HEllo</Button>
       <button 
       onClick={increment}
       className='bg-purple-800 px-7 py-2 rounded-lg ml-5' >+</button>
       <button 
       onClick={decrement}
       className='bg-purple-800 px-7 py-2 rounded-lg ml-5' >-</button>
       </div>
       
 
       </div>
     </>
   )
 }

export default Dashboard