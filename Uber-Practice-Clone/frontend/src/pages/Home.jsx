import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-5 flex justify-between bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5310f182519763.652f3606b64b0.jpg)] bg-cover bg-center flex-col  w-full bg-red-400'>
            <img className='w-20 ml-8' src="https://www.recruitics.com/hubfs/uber%20Logo.png" alt="" />
            <div className='bg-white p-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 px-1 rounded mt-4' >Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home