import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'



import React from 'react'
import Course from './Course'

const Profile = () => {
    const isLoading=false
    const enrolledCourses=[23,24]



  return (
    <div className='my-24 max-w-4xl mx-auto px-4'>
        <h1 className='font-bold text-2xl text-center md:text-left' >
            Profile
        </h1>
            <div className='flex flex-col md:flex-row items-center  md:items-start gap-8 my-5'> 
                <div className='flex flex-col items-center mb-4'>
                     <Avatar className='h-24 w-24 md:h-32 md:w-32'>
                                         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                         <AvatarFallback>CN</AvatarFallback>
                                   </Avatar>
                </div>

                <div className='flex flex-col items-start'>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-300' >
                            Name: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2' >Tayyab Xtrem</span>
                        </h1>

                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-300' >
                            Email: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2' >test@mail.com</span>
                        </h1>

                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-300' >
                            role: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2' >Instructor</span>
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
                                        <Input  type='text' placeholder='Name' className='col-span-3' />
                                        

                                </div>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label>Profile Photo</Label>
                                        <Input  type='file' accept='image/*' className='col-span-3' />
                                        

                                </div>

                            </div>
                            <DialogFooter>
                               <Button disabled={isLoading} >
                                 {
                                 
                                isLoading ?<> <Loader2 className='animate-spin' /> Please wait </> :'Save Changes'
                                 
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


