import React from 'react'

const SubTotal = ({length,totalPrice,left}:{length:number,totalPrice:number,left:boolean}) => {
  return (
    <div>
         <h1 className={`${left ? 'text-left' : 'text-right'} text-lg`}>{`Subtotal (${length} items): `} <span className="font-bold">{`$${totalPrice}`}</span></h1>
    </div>
  )
}

export default SubTotal