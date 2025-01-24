'use client';
import { useAppSelector } from '@/lib/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Success = () => {
    const cart=useAppSelector(getCart)

  return (
    <div className='absolute top-0 w-full border h-full bg-white z-30 py-12'>
        <div className='text-center mx-auto w-[70%]'>
            <h1 className='text-center'>
        Thankyou for purchasing the items with Amazon.in
        </h1>
        <div>
            <h1 className='font-bold py-3 underline' >Order Details</h1>
            {
                cart.map((product:any)=>{
                    return (

                        <div key={product.id} className='flex'>
                            <Image alt={product.title} width={100} height={100}  src={product.image} />
                            <div>
                            <h1>{product.title}</h1>
                            <p>{product.price}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
            
            <Link className='bg-[#FFD814] px-4 py-1 rounded-md' href={'/'}>
                chekcout more product
            </Link>
        </div>
    </div>
  )
}

export default Success