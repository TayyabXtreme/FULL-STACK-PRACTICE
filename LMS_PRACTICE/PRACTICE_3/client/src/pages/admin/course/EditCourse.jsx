import { Button } from '@/components/ui/button'
import { LucideArrowLeftCircle } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CourseTab from './CourseTab'



const EditCourse = () => {
    const navigate = useNavigate()
    

    return (
        <div className='flex-1'>
            <div className='flex items-center justify-between mb-5'>
                <div className='flex gap-2 items-center'>
                    <LucideArrowLeftCircle
                        className='transition-transform transform hover:scale-110 cursor-pointer'
                        onClick={() => navigate(`/admin/course`)}
                    />
                    <h1 className='font-bold text-xl'>Add Details information regarding course</h1>

                </div>

                <Link to='lecture'>
                    <Button
                    className='hover:text-blue-600'
                    variant='link'>Go to Lectures page</Button>
                </Link>
            </div>
            <CourseTab/>

        </div>
    )
}

export default EditCourse