import React from "react";
import Image from "next/image";
import Ratting from "./shared/Ratting";
import { useRouter } from "next/navigation";


const ProductCard = ({ product }: { product: any }) => {
    const router=useRouter()
  return (
    <div>
      <div className="cursor-pointer" onClick={()=>{
        router.push(`/product/${product.id}`)
      }}>
        <div className="bg-gray-100 h-[250px] flex items-center justify-center rounded-md overflow-hidden">
          <Image
            className="mix-blend-multiply p-7"
            width={200}
            height={200}
            src={product.image}
            alt={product.title}
          />
        </div>
        <h1 className="font-bold">{product.title}</h1>

        <p className="line-clamp-2 overflow-hidden">{product.description}</p>
        <Ratting rating={product.rating} />
        <p className="font-semibold text-2xl">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
