"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { clearAllCart, decrementQuantity, getCart, incrementQuantity, removeFromTheCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";

import { FaMinus, FaPlus } from "react-icons/fa";
import SubTotal from "./shared/SubTotal";


const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch=useAppDispatch()
  let totalPrice=0;

  cart.forEach((item:any)=>{
    totalPrice+=item.price*item.quantity
  })


  return (
    <div>
      <div className="flex  justify-between items-center border-b border-gray-300 py-5">
        <h1 className="font-bold text-2xl ">
          Shopping Cart
        </h1>
        <p
          className="font-medium
         "
        >
          {" "}
          Price
        </p>
      </div>

      {cart.map((product: any) => {
        return (
          <div key={product.id} className="py-4 flex justify-between">
            <div className="flex border-b border-gray-200">
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={0}
                />
              </div>
              <div className="ml-4 ">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-[#007600] my-1 text-xs font-bold">
                  In stock
                </p>
                <h1 className="font-bold cursor-pointer text-red-600" onClick={()=>{
                    dispatch(removeFromTheCart(product.id))
                }}>
                  Remove
                </h1>
                <div className="flex justify-between text-xl my-4 font-medium items-center bg-gray-200 rounded-md px-5 py-2 p-1 w-fit">
                    <div className="cursor-pointer mr-4" 
                    onClick={()=>{
                      product.quantity>1 &&  dispatch(decrementQuantity(product))
                    }}
                    ><FaMinus size={12} />  </div>
                    <div>{product.quantity}</div>
                    <div 
                    onClick={()=>{
                        dispatch(incrementQuantity(product))
                    }}
                    className="cursor-pointer ml-4"><FaPlus size={12} /></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">${product.price }  </h1>
              <p>
                M.R.P :{" "}
                <span className="line-through text-sm">
                  {product.price * 275}
                </span>
              </p>
            </div>
          </div>
        );
      })} 
      <div className="flex justify-between">
      {
        cart.length !==0 && (
          <h1 
      onClick={()=>{
        dispatch(clearAllCart({}))
      }}
      className="text-red-600 font-bold cursor-pointer" >Clear All</h1>
        )
      }
      
      <SubTotal length={cart.length} left={false} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default ShoppingCart;
