import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center ' >
        <div className='max-w-3xl mx-auto '>
            <h1 className='text-white text-4xl font-bold mb-4'>Find the Best Courses</h1>
            <p className='text-gray-200 dark:text-gray-400 mb-8'>Discover and learn, and upskill with our wide range of courses</p>
            <form className='flex items-center dark:bg-gray-800   bg-white dark-gray-100 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
                <Input 
                placeholder='Search Courses'
                type='text' className=' flex-grow border-none focus-visible:ring-0 px-6 py-3 dark:text-gray-100 text-gray-900 '  />
                <Button className='bg-blue-600 dark:bg-blue-700 px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800' > Search </Button>
            </form>
            <Button className='bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200'>Explore Courses</Button>
        </div>
    </div>
  )
}

export default HeroSection