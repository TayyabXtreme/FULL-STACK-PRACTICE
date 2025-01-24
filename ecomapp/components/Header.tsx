'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonLogo from '../public/amazonlogo.png'
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { supabase } from '@/lib/supbase/products';

const Header = () => {
    const [query,setQuery]=useState<string>('')
    const router=useRouter()
    const cart=useAppSelector(getCart)
    const [user,setUser]=useState<any>(null)
    const searchHandler=()=>{
        if(query!=='')
        router.push(`/search/${query}`)
    }

    const itemList=["All",
        "Fresh",
        "Amazon miniTV",
        "Baby",
        "Today's Deals",
        "Customer Service",
        "Registry",
        "Gift Cards",
        "Sell"]

        useEffect(()=>{
            const getUserData=async()=>{
                const {data}=await supabase.auth.getUser()
                const {user:users}=data
                setUser(users)
            }
            getUserData()
        },[])
        

  return (
    <>
    <div className='bg-[#131921] text-white py-1 fixed w-full z-10'>
        <div className='flex items-center justify-between w-[90%]  mx-auto'> 
            <div className='w-[10%]'>
            <Link href={'/'}>
            <Image src={amazonLogo} alt='logo' width={140} height={140} />
            </Link>
            </div>
            <div className='w-[60%] flex items-center' >
            <input value={query}

                onKeyDown={(e:any) => {
                    if (e.key === 'Enter') {
                        searchHandler();
                    }
                }}
            
              type="text"
              onChange={(e)=>setQuery(e.target.value)}
               className=' outline-none w-full p-2  rounded-l-md text-black'
                placeholder='Search Amazon.pk' />
            <div className='bg-[#FEBD69] p-2 rounded-r-md cursor-pointer hover:bg-[#ffad43]' 
            onClick={searchHandler}
            >
            <CgSearch size={'24px'} className='text-black' />
            </div>
            </div>
            <div className='w-[21%] flex gap-2 items-center justify-around'> 
                <div className='cursor-pointer'>

                    

                    <h1 onClick={()=>{
                        router.push('/signin')
                    }}  className='text-xs hover:underline' >{`${user ?  user?.identities[0].identity_data.full_name : 'Signin'}  `}</h1>
                    <h1 className='font-medium text-sm' >Account & Lists</h1>
                </div>
                <div >
                    <p className='text-xs'>Returns</p>
                    <h1 className='font-medium text-sm'>& Orders</h1>
                </div>
                <Link href={'/cart'} className='cursor-pointer'>
                    <p className='relative top-3 left-5'>{cart.length}</p>
                    <div className='flex'>
                    <BiCart size={'40px'} />

                    <h1 className='mt-4'>Cart</h1>
                    </div>
                </Link>
            </div>

        </div>
        
    </div>
    <div className='bg-[#232F3E] w-full p-2 text-white flex justify-between items-center pt-20'>
        <div>
        {
            itemList.map((link,idx)=>(
                <Link className='mx-2 font-semibold p-2 border hover:border border-transparent  hover:border-white h-full' href={`/${link}`} key={idx}>
                {link}
                </Link>
            ))
        }
        </div>
        <div>

        <h1 
        onClick={async()=>{
            const {error}=await supabase.auth.signOut()
            router.push('/signin')
        }}
        className='text-[#FEBD69] font-bold mr-5 cursor-pointer hover:underline' >Sign out</h1>
        </div>
        
        </div>
    </>
  )
}

export default Header