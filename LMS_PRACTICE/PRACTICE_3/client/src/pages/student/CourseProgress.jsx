import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useCompleteCourseMutation, useGetCourseProgressQuery, useInCompleteCourseMutation, useUpdateLectureProgressMutation } from '@/features/api/courseProgressApi'
import {CheckCircle, CheckCircle2, CirclePlay } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const CourseProgress = () => {
  const params=useParams()
  const {courseId}=params

  
  const {data,isLoading,isError,refetch}=useGetCourseProgressQuery(courseId)

  const [currentLecture,setCurrentLecture]=useState(null)

  

  const isCompleted=true

  // 
  const isLectureCompleted=(lectureId)=>{
    return progress.some((prog)=>prog.lectureId === lectureId && prog.viewed)
  }

  const [updateLectureProgress]=useUpdateLectureProgressMutation()
  const [completeCourse,{data:markCompletedData,isSuccess:completedSuccess}]=useCompleteCourseMutation()
  const [inCompleteCourse,{data:markInCompletedData,isSuccess:IncompletedSuccess}]=useInCompleteCourseMutation()

  
  
  
  const handleSelectLecture=(lecture)=>{
    setCurrentLecture(lecture)
    handleLectureProgress(lecture._id)
  }

  const handleCompleteCourse=async()=>{
    
    await completeCourse(courseId);
  }

  const handleInCompleteCourse=async()=>{
    
    await inCompleteCourse(courseId);
  }

  
  

  const handleLectureProgress = async (lectureId) => {
    try {
      const response = await updateLectureProgress({ courseId, lectureId }).unwrap();
      console.log('Lecture Progress Update:', response); // Debug the API response
      refetch(); // Trigger fetching updated progress
    } catch (error) {
      console.error('Error updating lecture progress:', error);
    }
  }
  
  useEffect(()=>{
    if(completedSuccess && markCompletedData){
      refetch()
      toast.success(markCompletedData.message || 'complete')
    }
    if(IncompletedSuccess  && markInCompletedData){
      refetch()
      toast.success(markInCompletedData.message || 'incomplete')
    }

  },[completedSuccess,IncompletedSuccess])

  if(isLoading) return <p>Loading ...</p>
  if(isError) return <p>Failed to Load course details</p>
  const {courseDetails,progress,completed}=data?.data
  const initialLecture=currentLecture || courseDetails.lectures && courseDetails.lectures[0]
  const {courseTitle}=courseDetails



  return (
    <div className='max-w-7xl mx-auto p-4 mt-20' >
        <div className='flex justify-between mb-4'>
          <h1 className='text-2xl font-bold' >{courseTitle}</h1>
          <Button
          variant={completed ? 'outline' : 'default'}
          onClick={completed ? handleInCompleteCourse : handleCompleteCourse}
          >{ completed ? <div className='flex items-center' > <CheckCircle className='h-4 w-4 mr-2' /> <span>Completed</span> </div> : 'Marks as completed' }</Button>
        </div>

        <div  className='flex flex-col md:flex-row gap-6'>
          <div className='flex-1 md:3/5 h-fit rounded-lg shadow-lg p-4'>
          <div>
          <video 
          onPlay={()=>handleLectureProgress(currentLecture?._id || initialLecture._id)}
          src={currentLecture?.videoUrl || initialLecture.videoUrl} 
          controls
          className='w-full min-h-64 max-h-96 md:rounded-lg'
          />

          </div>


          <div>
            <h3 className='font-medium text-lg' >{`Lecture ${courseDetails.lectures.findIndex((lec)=>lec._id === (currentLecture?._id || initialLecture._id) ) + 1}  : ${currentLecture?.lectureTitle || initialLecture?.lectureTitle} `}  </h3>
          </div>

          </div>
          <div className='flex flex-col w-full md:w-2/5 border-t-0 md:border-l border-gray-200 md:pl-4 pt-4 md:pt-0' >
              <h2 className='font-semibold text-xl mb-4' >Course Lecture</h2>
              <div className='flex-1 overflow-y-auto' >
              {  courseDetails?.lectures.map((lecture)=>{
                return (
                  <Card 
                  onClick={()=>handleSelectLecture(lecture)}
                  key={lecture._id} className={`mb-3 hover:cursor-pointer transition-transform ${lecture._id === (currentLecture?._id || initialLecture._id) ? 'bg-gray-200' : 'dark:bg-gray-800' } `} >

                    <CardContent className='flex items-center justify-between p-4' >
                      <div className='flex items-center' >
                        {
                          isLectureCompleted(lecture._id) ? <CheckCircle2 size={24} className='text-green-500 mr-2'  /> : (<CirclePlay size={24} className='text-gray-500 mr-2'/>)
                        }
                         <div>
                        <CardTitle className='text-lg font-medium' >{lecture.lectureTitle}</CardTitle>
                      </div>
                      </div>
                        {
                          isLectureCompleted(lecture._id) &&(

                         
                      <Badge variant={'outline'} className={'bg-green-200 text-green-600'} > Completed </Badge>
                    )
                  }
                    </CardContent>

                  </Card>
                )
              })  }
              </div>
          </div>
         
          {/* Display current watching lecture title */}
         
        </div>

    </div>
  )
}

export default CourseProgress