import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import React from 'react'

const Course = () => {
  return (
    <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover-shadow-2xl transform hover:scale-105 transition-all duration-300'>
        <div className='relative'>
            <img 
            className='w-full h-40 object-cover rounded-t-lg'
            alt='course'
            src="https://th.bing.com/th/id/OIP.39j4NMJOWfCf8sOtUH4JawHaEK?rs=1&pid=ImgDetMain"  />

        </div>
        <CardContent className='px-5 py-4 space-y-2'>
            <h1 className='hover:underline font-bold text-lg truncate'>Nextjs complete course in hindhi</h1>
            <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3' >
                <Avatar className='h-8 w-8'>
                     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                     <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <h1 className='font-medium text-sm'>Tayyab MERN STACK</h1>
            </div>
            <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>Advanced</Badge>
            </div>
            <div className='text-lg font-bold'>
                <span>Rs.499</span>
            </div>
        </CardContent>
    </Card>
  )
}

export default Course