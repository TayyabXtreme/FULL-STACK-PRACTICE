import React from 'react'


const LookingForDriver = ({ setLookingForDriverPanal ,setWaitingForDriverPanal}) => {

   


    return (
        <div>
            <h5 className='w-[93%] p-1 text-center absolute text-3xl text-gray-300 top-0'
                onClick={() => setLookingForDriverPanal(false)}
            >
                <i className="ri-arrow-down-wide-line" ></i>
            </h5>
            <h3 className='text-2xl font-semibold  mb-5'>Looking For a Driver</h3>
            <div className='flex gap-2 items-center justify-between flex-col'>
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
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

            </div>
        </div>
    )
}

export default LookingForDriver