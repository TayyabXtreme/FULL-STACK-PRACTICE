import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
  <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
    <div>
      <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
      <p className='mb-4'>
        Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
      </p>
    </div>
    
    <div>
      <h2 className='text-white text-lg font-semibold mb-4'>Courses</h2>
      <ul className='space-y-2'>
        <li><a href='#' className='hover:text-white'>Beginner Music Theory</a></li>
        <li><a href='#' className='hover:text-white'>Advanced Guitar Techniques</a></li>
        <li><a href='#' className='hover:text-white'>Songwriting 101</a></li>
        <li><a href='#' className='hover:text-white'>Vocal Performance</a></li>
      </ul>
    </div>
    
    <div>
      <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
      <ul className='space-y-2'>
        <li><a href='#' className='hover:text-white'>About</a></li>
        <li><a href='#' className='hover:text-white'>Contact Us</a></li>
        <li><a href='#' className='hover:text-white'>Events</a></li>
        <li><a href='#' className='hover:text-white'>Careers</a></li>
      </ul>
    </div>
    
    <div>
      <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
      <ul className='space-y-2'>
        <li className='hover:text-white'>Email: info@musicschool.com</li>
        <li className='hover:text-white'>Phone: +1 (123) 456-7890</li>
        <li className='hover:text-white'>Address: 123 Music Lane, New York, NY</li>
      </ul>
    </div>
  </div>
  
  <p className='text-center text-xs pt-8'>&copy; 2024 Music School. All rights reserved.</p>
</footer>

  )
}

export default Footer