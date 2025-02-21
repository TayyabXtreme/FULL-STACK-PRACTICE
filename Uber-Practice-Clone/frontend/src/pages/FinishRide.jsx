import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = ({setFinishRidePanal}) => {
  return (
    <div>
    <h5 className='w-[93%] p-1 text-center absolute text-3xl text-gray-300 top-0'
 onClick={()=>{setFinishRidePanal(false)} }
>
 <i className="ri-arrow-down-wide-line"></i>
</h5>
<h3 className='text-2xl font-semibold  mb-5'>Finish this Ride</h3>

<div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
   <div className='flex items-center gap-3 '>
       <img className='h-12 w-10 rounded-full object-cover ' src="https://th.bing.com/th/id/OIP.uR3KgRq-sJayRblSz7i40QHaLF?rs=1&pid=ImgDetMain" alt="" />
       <h2 className='text-lg font-medium' >Doey </h2>
   </div>
   <h5 className='text-lg font-semibold'>2.2 Km</h5>
</div>

<div className='flex gap-2 items-center justify-between flex-col'>

<div className='w-full mt-5 '>
   <div className='flex items-center gap-5 p-3 border-b'>
   <i className="text-lg ri-map-pin-2-fill"></i>
   <div className=''>
       <h3 className='text-lg font-medium'>562/11-A</h3>
       <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
   </div>
   </div>
   <div className='flex items-center gap-5 p-3 border-b'>
   <i className="ri-map-pin-user-fill"></i>
   <div className=''>
       <h3 className='text-lg font-medium'>562/11-A</h3>
       <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
   </div>
   </div>
   <div className='flex items-center gap-5 p-3' >
   <i className="ri-currency-line"></i>
   <div className=''>
       <h3 className='text-lg font-medium'>Rs 250.00</h3>
       <p className='text-sm -mt-1 text-gray-600'>Cash cash</p>
   </div>
   </div>
</div>

<div className='mt-6 w-full'>

   
    <Link 

to={'/captain-home'}



className='w-full flex text-lg justify-center items-center mt-5 bg-black text-white px-3 py-2 rounded-lg font-semibold' >Finish Ride</Link>

    <p className=' mt-10 text-sm'>Click on the finish ride if you completed the payment.</p>


</div>
</div>
</div>
  )
}

export default FinishRide