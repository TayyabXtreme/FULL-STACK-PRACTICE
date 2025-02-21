import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const [ridePopupPanal, setridePopupPanal] = useState(true)
  const ridePopupPanalRef=useRef(null)
  const confirmRidePopupPanalRef=useRef(null)
  const [confirmRidePopupPanal,setConfirmRidePopupPanal]=useState(false)

  
  useGSAP(function () {
    if (ridePopupPanal) {
      gsap.to( ridePopupPanalRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to( ridePopupPanalRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [ridePopupPanal])

  useGSAP(function () {
    if (confirmRidePopupPanal) {
      gsap.to( confirmRidePopupPanalRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to( confirmRidePopupPanalRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [confirmRidePopupPanal])


  return (
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://www.recruitics.com/hubfs/uber%20Logo.png" alt="" />
      <Link to={'/captain/logout'} className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className="ri-logout-box-r-line"></i>
    </Link>
    </div>
    <div className='h-3/5 '>
    <img

className='h-full w-full object-cover' src="https://th.bing.com/th/id/OIP.u3YYk8m9y48CnezXODfnYgHaHa?rs=1&pid=ImgDetMain" alt="" /> 
    </div>
    <div className='h-2/5 p-6'>

      <CaptainDetails/>
   
    </div>
    <div ref={ ridePopupPanalRef}  className='pt-12 fixed w-full translate-y-full   z-10 bg-white  bottom-0  px-3 py-10'>
      <RidePopup setridePopupPanal={setridePopupPanal} setConfirmRidePopupPanal={setConfirmRidePopupPanal} />
     </div>

     <div ref={ confirmRidePopupPanalRef}  className='pt-12 fixed w-full h-screen translate-y-full   z-10 bg-white  bottom-0  px-3 py-10'>
      <ConfirmRidePopup setConfirmRidePopupPanal={setConfirmRidePopupPanal} />
     </div>

    


</div>
  )
}

export default CaptainHome