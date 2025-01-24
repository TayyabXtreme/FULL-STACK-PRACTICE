import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProccedToBuy from './ProccedToBuy'

const Cart = () => {
   
  return (
    <div className='mt-10 w-[80%] mx-auto'>
        <div className='flex w-full justify-between'>
          <div className='w-[75%]'>
        <ShoppingCart  />
          </div>
          <div className=' w-[25%]'>
        <ProccedToBuy/>
          </div>
        </div>
    </div>
  )
}

export default Cart