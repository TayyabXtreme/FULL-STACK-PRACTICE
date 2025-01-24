
import Image from 'next/image'
import React from 'react'
import Ratting from './Ratting'
import { useAppDispatch } from '@/lib/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation';
import Link from 'next/link'


const CategroyWiseProject = ({product}:{product:any}) => {
    const dispatch=useAppDispatch()
    const router=useRouter()
  return (
    <div className='border-gray-300 flex justify-between flex-col  bg-white border rounded-md p-2 shadow-md  h-[320px]'>
        <h1 className='font-bold'>{product.category}</h1>
        <Link href={`/product/${product.id}`}>
              <div className='flex items-center justify-center '>

            <Image
            
            src={product.image} className='w-[100px] h-[150px]' width={200} height={200} alt={product.title} />
            
        </div>
        
        <div>
            <h1 className='line-clamp-2' >{product.title}</h1>
            <Ratting  rating={product.rating} />
        </div>
        </Link>
        <div>
            <button className='w-full my-2 rounded-md border bg-[#FFD814] py-1'
            onClick={()=>{dispatch(addToCart(product))
                router.push('/cart')

            }}
            >Add to Cart</button>
        </div>
    </div>
  )
}

export default CategroyWiseProject