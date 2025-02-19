import React from 'react'

const VehiclePanal = (props) => {
  return (
    <div>
    
    <h5 className='w-[93%] p-1 text-center absolute text-3xl text-gray-300 top-0'
      onClick={() => props.setVehiclePanalOpen(false)}
    >
      <i className="ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className='text-2xl font-semibold  mb-5'>Choose a Vehicle</h3>
    <div onClick={()=>{props.setConfirmRidePanal(true)

props.setVehiclePanalOpen(false)
    }

} className='flex mb-2 active:border-black active:border-2 border-0 bg-gray-100 rounded-xl  p-3 w-full  items-center justify-between'>
      <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
      <div className=' w-1/2 ml-2'>
        <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
        <h5 className='font-medium text-sm'>2 mins away</h5>
        <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
      </div>
      <h2 className='text-lg font-semibold'>Rs.193</h2>
    </div>

    <div
     onClick={()=>{props.setConfirmRidePanal(true)

        props.setVehiclePanalOpen(false)
            }
        
        }
    className='flex mb-2 active:border-black active:border-2 border-0 bg-gray-100 rounded-xl  p-3 w-full  items-center justify-between'>
      <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
      <div className=' w-1/2 -ml-2'>
        <h4 className='font-medium text-base'>UberMoto <span><i className="ri-user-3-fill"></i>1</span></h4>
        <h5 className='font-medium text-sm'>3 mins away</h5>
        <p className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
      </div>
      <h2 className='text-lg font-semibold'>Rs.65</h2>
    </div>

    <div 
     onClick={()=>{props.setConfirmRidePanal(true)

        props.setVehiclePanalOpen(false)
            }
        
        }
    className='flex  mb-2  active:border-black active:border-2 border-0 bg-gray-100 rounded-xl  p-3 w-full  items-center justify-between'>
      <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
      <div className=' w-1/2 ml-2'>
        <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
        <h5 className='font-medium text-sm'>2 mins away</h5>
        <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
      </div>
      <h2 className='text-lg font-semibold'>Rs.118.68</h2>
    </div>


 
 
  </div>
  )
}

export default VehiclePanal