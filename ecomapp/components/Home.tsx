'use client';
import { useSupabase } from '@/lib/hooks/useSupabase'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import CategroyWiseProject from './shared/CategroyWiseProject';

const Home = () => {
    const {getMensClothing,mensProduct,getWomensClothing,womensProduct}=useSupabase()
    useEffect(()=>{
        getMensClothing("men's clothing")
        getWomensClothing("women's clothing")

    },[])
   
  return (
    <div>
        <Image style={{
                maskImage:'linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0))'
            }} src={'https://m.media-amazon.com/images/I/61zGYdzA-WL._SX1500_.jpg'} alt='amazon-back pic' width={10000} height={1000} />
           
            <div className='grid grid-cols-4  gap-2 overflow w-[80%] mx-auto  relative -top-64' >
            {
                
                mensProduct.map((product:any)=>{
                    return (
                        <div key={product.id}>
                            <CategroyWiseProject product={product}  />

                        </div>
                    )
                })
            }
            {
                
                womensProduct.map((product:any)=>{
                    return (
                        <div key={product.id}>
                            <CategroyWiseProject product={product}  />

                        </div>
                    )
                })
            }
            </div>
    </div>
  )
}

export default Home