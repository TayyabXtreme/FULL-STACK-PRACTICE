import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.uR3KgRq-sJayRblSz7i40QHaLF?rs=1&pid=ImgDetMain" alt="" />
          <h4 className='text-lg font-medium'>Doey</h4>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Rs 360.27</h4>
          <p className='text-sm font-medium text-gray-600'>Earned</p>
        </div>
        
      </div>

      <div className='text-center p-3 mt-6 bg-gray-100 rounded-xl flex justify-center gap-5 items-start'>
        <div>
        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div>
        <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div>
        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails