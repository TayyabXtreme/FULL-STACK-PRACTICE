import { useAppSelector } from '@/lib/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import Image from 'next/image';
import React from 'react'
import { FaLock } from 'react-icons/fa';
import logo from "@/public/logo.png";

const DeliveryAddress = () => {
      const cart = useAppSelector(getCart);
  return (
    <div className='w-full'>

  <div className=" mx-auto">
    <div className="flex w-[70%]  border-b border-b-gray-300 justify-between py-2">
      <h1 className="flex-1 font-bold text-lg w-[60%]">
        1. Delivery address
      </h1>
      <p className="text-sm flex-1">
        Tayyab xtrem Cozy Apartment Bhutany Colony JALANDHAR,PUNJAB 144411
        Add delivery instruction
      </p>
    </div>
  </div>
  <div className=" mx-auto">
    <div className="  border-b border-b-gray-300 justify-between py-2">
      <div className="">
        <h1 className=" font-bold text-lg w-[60%]">
          2. Items and delivery
        </h1>
      </div>

      {cart.map((product: any) => {
        return (
          <div key={product.id} className="my-4 ">
            <div className="flex">
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.title}
              />
              <div className="ml-5">
                <h1 className="font-bold">{product.title}</h1>
                <p className="font-bold text-2xl py-2">${product.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div></div>
  )
}

export default DeliveryAddress