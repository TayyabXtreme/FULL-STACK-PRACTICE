

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowBigLeft, ArrowLeftFromLine, ArrowUpLeftFromCircle, Loader2, LucideArrowLeftCircle, LucideArrowUpLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { useCreateCourseMutation } from '@/features/api/courseApi';
import { toast } from 'sonner';

const AddCourse = () => {
    const [createCouse,{data,error,isSuccess,isLoading}]=useCreateCourseMutation()
    const [courseTitle,setCourseTitle]=useState('')
    const [category,setCategory]=useState('')

    const navigate = useNavigate();
  
    const createCourseHanlder=async()=>{
        if(!courseTitle || !category){
            toast.error('please fill all the filed')
        }else{
            await createCouse({courseTitle,category})
        }
    }
    const getSelectedCategory=(value)=>{
        setCategory(value)
    }

    useEffect(()=>{
        if(isSuccess && data){
            toast.success(data.message || 'course created successfully')
            navigate(-1)
        }
        if(error){
            toast.error(error.data.message || 'failed to create the course')
        }

    },[isLoading,isSuccess,data,error])

    return (
        <div className='flex-1 mx-10'>
            <div>
                <LucideArrowLeftCircle
                    className='transition-transform transform hover:scale-110 cursor-pointer'
                    onClick={() => navigate(-1)}
                    size='25' />
            </div>
            <div className='mb-4'>
                <h1 className='font-bold text-xl'>Lets add course, add some basic course details for your new course</h1>
                <p className='text-sm'>This is the admin panel for adding new courses.</p>
            </div>
            <div>
                <div className='space-y-4'>
                    <Label>Title</Label>
                    <Input 
                    value={courseTitle}
                    onChange={(e)=>setCourseTitle(e.target.value)}
                    type='text' name='courseTitle' placeholder='your course name' />
                </div>
                <div className='space-y-4'>
                    <Label>Category</Label>
                    <Select onValueChange={getSelectedCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                
                                <SelectItem value="Web Development">Web Development</SelectItem>
                                <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                                <SelectItem value="Mobile Development">Databases</SelectItem>
                                <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                                <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                                
                            </SelectGroup>
                            <SelectGroup>
                               
                                <SelectItem value="NextJs">NextJs</SelectItem>
                                <SelectItem value="MongoDb">MongoDb</SelectItem>
                                <SelectItem value="MySql">MySql</SelectItem>
                                <SelectItem value="Data Science">Data Science</SelectItem>
                                <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                                
                                
                                <SelectItem value="DevOps">DevOps</SelectItem>
                                
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex gap-2 items-center mt-4'>
                    <Button 
                    onClick={()=>navigate(-1)}
                    variant={'outline'}>
                        <LucideArrowLeftCircle  className='transition-transform transform hover:scale-110 cursor-pointer' size={'25'} />
                        Back</Button>
                    <Button
                    disabled={isLoading}
                    onClick={createCourseHanlder}
                    >
                        {
                            isLoading ? <><Loader2 className='animate-spin h-4 w-4 ml-2'/> Please Wait</> : 'Create Course'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddCourse