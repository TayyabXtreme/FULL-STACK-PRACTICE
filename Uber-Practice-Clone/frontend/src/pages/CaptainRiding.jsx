import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import FinishRide from './FinishRide'
const CaptainRiding = () => {
    const  [finishRidePanal, setFinishRidePanal] = useState(false)
    const finishRidePanalRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanal) {
          gsap.to(finishRidePanalRef.current, {
            transform: 'translateY(0)'
          })
        } else {
          gsap.to(finishRidePanalRef.current, {
            transform: 'translateY(100%)'
          })
    
        }
      }, [finishRidePanal])
  return (
    <div className='h-screen'>
         
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://www.recruitics.com/hubfs/uber%20Logo.png" alt="" />
      <Link to={'/captain/logout'} className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className="ri-logout-box-r-line"></i>
    </Link>
    </div>
    <div className='h-4/5 '>
    <img

className='h-full w-full object-cover' src="https://th.bing.com/th/id/OIP.u3YYk8m9y48CnezXODfnYgHaHa?rs=1&pid=ImgDetMain" alt="" /> 
    </div>
   <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'>
   <h5 className='w-[95%] p-1 text-center absolute text-3xl text-gray-300 top-0'
     
     >
       <i className="ri-arrow-down-wide-line"></i>
     </h5>
    

    
        <h4 className='text-xl mt-2 font-semibold'>4 KM away</h4>
        <button 
        onClick={()=>{
            setFinishRidePanal(true)
        }}
        className='w-1/2 mt-5 bg-black text-white px-3 py-2 rounded-lg font-semibold'>Complete Ride</button>
        
   </div>



   <div ref={ finishRidePanalRef}  className='pt-12 fixed w-full  translate-y-full   z-10 bg-white  bottom-0  px-3 py-10'>
      <FinishRide setFinishRidePanal={setFinishRidePanal} />
     </div>
    


</div>
  )
}

export default CaptainRiding