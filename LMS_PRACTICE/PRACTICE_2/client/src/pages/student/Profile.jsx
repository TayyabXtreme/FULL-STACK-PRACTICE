import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'
import Course from './Course'

const Profile = () => {
    const isLoading=false
    const enrolledCourses=[1];
    return (
        <div className='my-24 max-w-4xl mx-auto px-4'>
            <h1 className='font-bold text-2xl text-center md:text-left'>Profile</h1>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
                <div className='flex flex-col items-center'>
                    <Avatar className='h-24 w-24 md:h-32 md:w-32 mb-4'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>

                    </Avatar>

                </div>
                <div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-100 '>
                            Name : <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>Tayyab Xtrem</span>
                        </h1>

                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-100 '>
                            Email : <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>tayyab012300@gmail.com</span>
                        </h1>

                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-900 dark:text-gray-100 '>
                            role : <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>Instructor</span>
                        </h1>

                    </div>

                    <div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size='sm' className='mt-2' >Edit Profile</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name">
                                            Name
                                        </Label>
                                        <Input className="col-span-3"
                                        placeholder='Name'
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="profile-photo" >
                                            Profile Photo
                                        </Label>
                                        <Input type='file' accept='image/*'  className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    

                                    <Button disabled={isLoading} >

                                        {
                                            isLoading ? (
                                                <>
                                                <Loader2 className='animate-spin mr-2 h-4 w-4'/> Please wait</>
                                            ):
                                            'Save Changes'
                                        }

                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>


                    </div>


                </div>
            </div>

            <div>
                <h1 className='font-medium text-lg' >Course Your're  enrolled in</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5' >
                        {
                            enrolledCourses.lengtg==0 ? <h1>You haven't  enrolled yet</h1> : (
                                enrolledCourses.map((courses,index)=> <Course key={index} />)
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default Profile