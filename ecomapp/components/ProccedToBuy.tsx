'use client';

import React from 'react'
import SubTotal from './shared/SubTotal'
import { useAppSelector } from '@/lib/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation';

const ProccedToBuy = () => {
  const router=useRouter()
    const cart=useAppSelector(getCart)
    let totalPrice=0;
    cart.forEach((item:any)=>{
        totalPrice+=item.price*item.quantity
      })
  return (
    <div className='border-gray-300 p-4 border ml-4 h-fit'>
        <div className='text-sm'>
            <p><span className='text-[#007600] font-medium' >Your order is eligible for FREE Delivery.</span>  Choose FREE Delivery option at checkout</p>
          
            <SubTotal length={cart.length} left={true} totalPrice={totalPrice} />
           <button 
           onClick={()=>{
            router.push('/checkout')
           }}
           className='bg-[#FFD814] w-full py-1 rounded-md shadow-md my-3 transform hover:scale-105 duration-300' >Procced to Buy</button>
        </div>
    </div>
  )
}

export default ProccedToBuy