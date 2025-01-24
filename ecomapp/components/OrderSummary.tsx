import { useAppSelector } from "@/lib/hooks/redux";
import { supabase } from "@/lib/supbase/products";
import { getCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios";

import React from "react";


const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
const OrderSummary = () => {
  
  const cart=useAppSelector(getCart)
  const createStripeSession=async()=>{
    
    try {
      const {data:{user}}=await supabase.auth.getUser();
      const stripe=await stripePromise;

      const checkoutSession=await axios.post('/api/checkout-sessions',{
        items:cart,
        email:user?.email
      })
      const result=await stripe?.redirectToCheckout({
        sessionId:checkoutSession.data.id
      })

      if(result?.error){
        console.log(result.error.message)
      }

    } catch (error) {
      console.log(error)
    }
   

  }




  return (
    <div className="border border-gray-300 p-4 mt-5 h-fit">
      <div>
        <h1 className="font-bold ">Order Summary</h1>
        <div className="text-sm">
          <div className="flex items-center justify-between">
            <p>items</p>
            <p>7890</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery</p>
            <p>7890</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>7890</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion Applied</p>
            <p>7890</p>
          </div>
          <div className="flex justify-between border-t border-gray-300 text-[#B12704] font-bold text-xl py-3 my-1">
            <h1 className="mr-2">Order Total: </h1>
            <h1>23423342</h1>
          </div>
        </div>
        <button
        onClick={createStripeSession}
        className="bg-[#FFD814] w-full text-sm rounded-md px-4 py-3">
          Place Your Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
