import Image from 'next/image'
import React from 'react'
import primeLogo from '@/public/primelogo.png'
import { useAppDispatch } from '@/lib/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

const AddToCartContainer = ({product}:{product:any}) => {
  const dispatch=useAppDispatch()
  const router=useRouter()
  return (
    <div className='border border-gray-300 rounded-md h-fit w-[80%]'>
      <div className='p-4'>
      <Image src={primeLogo} alt='primelogo' width={100} height={100} />
      </div>
      <div className='p-4'>
        <h1 className='text-sm'>
          <span className='text-[#147c8f]'>Free delivery </span>
           Thursday,21 March. <span className='text-[#147c8f]'>Details </span></h1>
        <h1 className='mt-4'>Or fatest delivery Tomorrow,20 March.Order within 15 hrs 53 min.Details</h1>
        <p className='text-[#147C8F]' >Deliver to Serendra - Jalandhar 144411</p>

        <button 
        onClick={()=>{
          dispatch(addToCart(product))
          router.push('/cart')

        }}
        className='bg-[#FFD814] rounded-full w-full py-1 mt-1' >Add to Cart</button>
        <button className='bg-[#FFA41C] rounded-full w-full py-1 mt-1' >Buy now</button>

      </div>
    </div>
  )
}

export default AddToCartContainer