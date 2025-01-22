import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { useCreateCheckoutSessionMutation } from '@/features/api/purchaseApi'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const BuyCourseButton = ({courseId}) => {
  const [creaeteCheckoutSession,{data,isLoading,isSuccess,isError,error}]=useCreateCheckoutSessionMutation()
  const purchasedCourseHandler=async()=>{
    console.log(courseId)
    await creaeteCheckoutSession(courseId)
  }

  useEffect(()=>{
    if(isSuccess){
      if(data?.url){
        window.location.href=data.url
        }
      else{
        toast.error('invalid responsoe from server')
      }


    }

    if(isError){
      toast.error(error.data.message || 'failed to create checkout')
    }

  },[data,isSuccess,isError,error])
  return (
    <Button 
    disabled={isLoading}
    className='w-full'
    onClick={purchasedCourseHandler}
    >{isLoading ? <><Loader2/> Please wait </> : 'Purchase Course'  }</Button>
  )
}

export default BuyCourseButton