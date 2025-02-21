import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanal from '../components/LocationSearchPanal'
import VehiclePanal from '../components/VehiclePanal'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaittingForDriver from '../components/WaittingForDriver'
const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panalOpen, setPanalOpen] = useState(false)
  const panalRef = useRef(null)
  const panalCloseRef = useRef(null)
  const vehiclePanalRef = useRef(null)
  const [confirmRidePanal,setConfirmRidePanal]=useState(false)
  const confirmRidePanalRef=useRef(null)
  const lookingForDriverRef=useRef(null)
  const [lookingForDriverPanal,setLookingForDriverPanal]=useState(false)
  const [vehiclePanalOpen, setVehiclePanalOpen] = useState(false)
  const [waitingForDriverPanal,setWaitingForDriverPanal]= useState(false)
  const waitingDriverRef=useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(() => {
    if (panalOpen) {
      gsap.to(panalRef.current, {
        height: '70%',
        opacity: 1,
        padding: 20,
        duration: 0.3, // Add smooth transition
      });
      gsap.to(panalCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panalRef.current, {
        height: '0%',
        minHeight: 0, // Ensure it collapses fully
        opacity: 0,
        padding: 0, // Remove padding to fully close
        duration: 0.3,
      });
      gsap.to(panalCloseRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [panalOpen]);

  useGSAP(function () {
    if (vehiclePanalOpen) {
      gsap.to(vehiclePanalRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanalRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [vehiclePanalOpen])


  useGSAP(function () {
    if (confirmRidePanal) {
      gsap.to(confirmRidePanalRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanalRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [confirmRidePanal])

  useGSAP(function () {
    if (lookingForDriverPanal) {
      gsap.to(lookingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(lookingForDriverRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [lookingForDriverPanal])

  useGSAP(function () {
    if (waitingForDriverPanal) {
      gsap.to(waitingDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingDriverRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [waitingForDriverPanal])





  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://www.recruitics.com/hubfs/uber%20Logo.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img

          className='h-full w-full object-cover' src="https://th.bing.com/th/id/OIP.u3YYk8m9y48CnezXODfnYgHaHa?rs=1&pid=ImgDetMain" alt="" />
      </div>
      <div className=' h-screen absolute top-0  w-full  flex flex-col justify-end ' >
        <div className={`h-[30%] ${panalOpen ? '' : 'rounded-t-3xl'}   p-6 bg-white relative`}>
          <h5
            ref={panalCloseRef}
            onClick={() => setPanalOpen(false)}
            className='absolute opacity-0 top-6  right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 rounded-full bg-gray-900"></div>
            <input
              onClick={() => { setPanalOpen(true) }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a Pick-up location' />
            <input
              onClick={() => { setPanalOpen(true) }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />


          </form>
        </div>
        <div ref={panalRef} className=' opacity-0 bg-white h-[0%] '>
          <LocationSearchPanal vehiclePanal={vehiclePanalOpen} setPanalOpen={setPanalOpen} setVehiclePanal={setVehiclePanalOpen} />
        </div>
      </div>
      <div ref={vehiclePanalRef} className='pt-12 fixed w-full  z-10 bg-white translate-y-full bottom-0  px-3 py-10'>
     <VehiclePanal setConfirmRidePanal={setConfirmRidePanal}   setVehiclePanalOpen={setVehiclePanalOpen} />
     </div>

     <div ref={confirmRidePanalRef} className='pt-12 fixed w-full  z-10 bg-white translate-y-full bottom-0  px-3 py-6'>
     <ConfirmedRide setLookingForDriverPanal={setLookingForDriverPanal}  setConfirmRidePanal={setConfirmRidePanal} />
     </div>
     <div ref={lookingForDriverRef} className='pt-12 fixed w-full  z-10 bg-white translate-y-full bottom-0  px-3 py-6'>
      <LookingForDriver setWaitingForDriverPanal={setWaitingForDriverPanal} setLookingForDriverPanal={setLookingForDriverPanal} />
     </div>
     <div ref={waitingDriverRef}  className='pt-12 fixed w-full  z-10 bg-white  translate-y-full bottom-0  px-3 py-6'>
      <WaittingForDriver setWaitingForDriverPanal={setWaitingForDriverPanal} />
     </div>
     
    </div>
  )
}

export default Home