import React from 'react'

const RidePopup = ({setridePopupPanal,setConfirmRidePopupPanal}) => {
  return (
    <div>
         <h5 className='w-[93%] p-1 text-center absolute text-3xl text-gray-300 top-0'
      onClick={()=>{setridePopupPanal(false)} }
    >
      <i className="ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className='text-2xl font-semibold  mb-5'>New Ride Available!</h3>

    <div className='flex items-center justify-between p-2 bg-yellow-400 rounded-lg mt-4'>
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
    <div className='flex w-full items-center justify-between gap-2 px-4'>
    <button 
    onClick={()=>{
        setridePopupPanal(false)
        setConfirmRidePopupPanal(true)
    }}

    className='w-1/2 mt-5 bg-black text-white px-3 py-2 rounded-lg font-semibold' >Accept</button>
     <button 
    onClick={()=>{
        setridePopupPanal(false)
        }}
    
    className='w-1/2 mt-4 bg-gray-300 text-gray-700 px-3 py-2 rounded-lg font-semibold' >Ignore</button>
    </div>
    </div>
    </div>
  )
}

export default RidePopup