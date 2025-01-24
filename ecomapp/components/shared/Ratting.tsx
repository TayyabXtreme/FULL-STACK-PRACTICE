import React from 'react'
import { FaStar } from "react-icons/fa";
const Ratting = ({rating}:{rating:any}) => {
   rating=JSON.parse(rating)
  return (
    <div className='flex  items-center'>
     
      {
        Array(4).fill(1).map((dummyItem,id)=>  <FaStar color='orange' size={20} key={id} />)
        
      }
      <h1 className='text-[#007185] ml-2 font-medium'>{rating.count} ratings</h1>
      
   
    </div>
  )
}

export default Ratting