import React from 'react'
import Course from './Course';

const MyLearning = () => {
    const isLoading=false;
    const myLearningCourse=[1,2];
  return (
    <div className='max-w-4xl mx-auto px-4 md:px-0 my-24'>
        <h1 className='font-bold text-2xl' >MY LEARNING</h1>
        <div className='my-5'>
                {
                    isLoading? <MyLearningSkeleton/>  : (
                        myLearningCourse.length===0 ? (<p>You are not enrolled in any course</p>) : (
                          <div className='grid gird-cols-1 md:grid-cols-3  gap-4'>
                            {
                                myLearningCourse.map((course,index)=> <Course key={index} />) 
                            }
                          </div>
                        )

                    )

                }
        </div>
    </div>
  )
}

export default MyLearning

const MyLearningSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
        ></div>
      ))}
    </div>
  );