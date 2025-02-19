import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
    <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://www.recruitics.com/hubfs/uber%20Logo.png" alt="" />
      <Link to={'/home'} className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className="ri-logout-box-r-line"></i>
    </Link>
    </div>
    <div className='h-1/2'>
    <img

className='h-full w-full object-cover' src="https://th.bing.com/th/id/OIP.u3YYk8m9y48CnezXODfnYgHaHa?rs=1&pid=ImgDetMain" alt="" /> 
    </div>
    <div className='h-1/2 p-4'>
    <div>
    <div className='flex items-center justify-between'>
<img className='h-14'  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
<div className='text-right'>
    <h2 className='text-lg font-medium'>Tayyab</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 124</h4>
    <p className='text-sm text-gray-600'>Maruthi Suzuki Alto</p>
</div>
</div>
<div className='flex gap-2 items-center justify-between flex-col'>
   
    <div className='w-full mt-5 '>
        
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

</div>
    </div>
    <button  className='w-full mt-5 bg-black text-white px-3 py-2 rounded-lg font-semibold'>Make a Payment</button>

    </div>
</div>
  )
}

export default CaptainHome