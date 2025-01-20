import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'



import React, { useEffect, useState } from 'react'
import Course from './Course'
import { useLoadUserQuery, useUpdateUserMutation } from '@/features/api/authApi'
import { toast } from 'sonner'

const Profile = () => {
    const [name,setName]=useState('')
    const [profilePhoto,setProfilePhoto]=useState('')
    const enrolledCourses=[23,24]
    const {data,isLoading,error,refetch}=useLoadUserQuery()
    const [updateUser,{data:updateData,isLoading:updateIsLoading,isError,error:updateError,isSuccess}]=useUpdateUserMutation()
    console.log(data)

   

    const onChangeHandler=(e)=>{
        const file=e.target.files?.[0]
        if(file){
            setProfilePhoto(file)
        }
    }

    const updateUserHandler=async()=>{
        const formData=new FormData();
        formData.append('name',name)
        formData.append('profilePhoto',profilePhoto)
        await updateUser(formData)

    }


    useEffect(() => {
        if (isSuccess) {
            console.log(updateData)
          toast.success(updateData?.message || 'User updated successfully');
          refetch();
        }
    
        if (isError) {
          
          toast.error(updateError.data.message || 'Profile not updated. Try again later.');
        }
      }, [isSuccess, updateError, updateData, refetch]);

    if(isLoading){
        return <ProfileSkeleton/>

    }

    if(error){
        return <h1 className='text-3xl font-extrabold text-center my-28'>Page does not exist</h1>

    }


  return (
    <div className='my-24 max-w-4xl mx-auto px-4'>
        <h1 className='font-bold text-2xl text-center md:text-left' >
            Profile
        </h1>
            <div className='flex flex-col md:flex-row items-center  md:items-start gap-8 my-5'> 
                <div className='flex flex-col items-center mb-4'>
                     <Avatar className='h-24 w-24 md:h-32 md:w-32'>
                                         <AvatarImage src={data.user.photoUrl} alt="@shadcn" />
                                         <AvatarFallback>{data.user.name[0].toUpperCase()}</AvatarFallback>
                                   </Avatar>
                </div>

                <div className='flex flex-col items-start'>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-300' >
                            Name: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2' >{data.user.name}</span>
                        </h1>

                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-300' >
                            Email: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2' >{data.user.email}</span>
                        </h1>

                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-300' >
                            role: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2' >{data.user.role}</span>
                        </h1>

                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size='sm' className='mt-2'>Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when  you're done.
                                </DialogDescription>

                            </DialogHeader>
                            <div className='gap-4 py-4 grid'>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label>Name</Label>
                                        <Input  
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                        type='text' placeholder='Name' className='col-span-3' />
                                        

                                </div>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label>Profile Photo</Label>
                                        <Input 
                                        onChange={(e)=>{onChangeHandler(e)}}
                                        type='file' accept='image/*' className='col-span-3' />
                                        

                                </div>

                            </div>
                            <DialogFooter>
                               <Button disabled={updateIsLoading}
                               onClick={updateUserHandler}
                               >
                                 {
                                 
                                 updateIsLoading ?<> <Loader2 className='animate-spin' /> Please wait </> :'Save Changes'
                                 
                                 }
                               </Button>

                            </DialogFooter>


                        </DialogContent>

                    </Dialog>
                </div>


            </div>

            <div>
                <h1  className='font-medium text-lg' >Courses you're enrolled in</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    enrolledCourses.length===0 ? <h1>You haven't enrolled it</h1> :(
                        enrolledCourses.map((course,index)=><Course key={index} />)
                    )
                }

                </div>
            </div>
        
    </div>
  )
}

export default Profile


const ProfileSkeleton=()=>{
    return (
        <div className="container mx-auto p-6 max-w-4xl">
  <h1 className="text-2xl font-bold text-center md:text-left mb-6">Profile</h1>
  
  <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
    {/* Avatar Section */}
    <div className="flex flex-col items-center">
      <div className="rounded-full h-24 w-24 md:h-32 md:w-32 bg-gray-200 mb-4">
        {/* Replace with Avatar component */}
      </div>
    </div>
    
    {/* Profile Info Section */}
    <div className="w-full">
      <div className="mb-4">
        <h2 className="font-semibold text-gray-900">
          Name: <span className="font-normal text-gray-700 ml-2">Your Name</span>
        </h2>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-gray-900">
          Email: <span className="font-normal text-gray-700 ml-2">your.email@example.com</span>
        </h2>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-gray-900">
          Role: <span className="font-normal text-gray-700 ml-2">Your Role</span>
        </h2>
      </div>
      
      {/* Edit Profile Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  </div>
  
  {/* Enrolled Courses Section */}
  <div>
    <h2 className="font-medium text-lg mb-4">Courses You're Enrolled In</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Replace with dynamic courses */}
      <div className="p-4 border rounded shadow-md">
        <h3 className="font-semibold">Course Title</h3>
      </div>
    </div>
  </div>
</div>

    )
}