import Image from "next/image";
import React from "react";
import Ratting from "./shared/Ratting";
import AddToCartContainer from "./AddToCartContainer";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  console.log(singleProduct);

  if (singleProduct.length === 0) {
    return <h1>product not found</h1>;
  }
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-between">
        
          {singleProduct &&
            singleProduct.map((product: any) => {
              return (
                <div className="flex" key={product.id}>
                <div  className="flex">
                  <div className="bg-gray-100">
                    <Image
                      className="mix-blend-multiply p-4"
                      src={product.image}
                      width={300}
                      height={300}
                      alt={product.title}
                    />
                  </div>
                  <div className="mx-4 w-[70%]">
                    <h1 className="font-bold text-lg">{product.title}</h1>
                    <p>{product.description}</p>
                    <Ratting rating={product.rating} />
                    <h1 className="font-bold text-2xl">{`$${product.price}`}</h1>
                    <div>
                      <h1>About this item</h1>
                      <ul className="list-disc list-inside">
                        <li>
                          Sleek design with a durable glass front and back
                        </li>
                        <li>Advanced dual-camera system for stunning photos</li>
                        <li>Powerful A13 Bionic chip for fast performance</li>
                        <li>Long-lasting battery life</li>
                        <li>Face ID for secure authentication</li>
                        <li>
                          Available in multiple colors and storage options
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <AddToCartContainer product={product} />
                </div>
              );
            })}
     

        
      </div>
    </div>
  );
};

export default SingleProduct;
