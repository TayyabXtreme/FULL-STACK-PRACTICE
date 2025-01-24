"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { FaLocationArrow, FaLock } from "react-icons/fa";
import { useAppSelector } from "@/lib/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import OrderSummary from "./OrderSummary";
import DeliveryAddress from "./DeliveryAddress";
const Checkout = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className="absolute top-0 w-full p-12 bg-white z-20 h-full ">
        <div>
        <div className="w-[100%] mx-auto flex items-center justify-between border-b border-gray-400 pb-5">
      <div>
        <Image src={logo} width={150} height={150} alt="amazon-logo" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">Checkout</h1>
      </div>
      <div>
        <FaLock size={"30px"} color="gray" />
      </div>
    </div>
        </div>
        <div className="flex justify-between w-[70%] mx-auto">
            <div className="">
        <DeliveryAddress/>
            </div>
            <div>
        <OrderSummary/>
            </div>
        </div>

 
         
    </div>
  );
};

export default Checkout;
