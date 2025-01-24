
import React from 'react'
import ProductCard from './ProductCard'

const SearchResult = ({filterData}:{filterData:any}) => {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='mt-10'>
            <div>
            <h1 className='font-bold text-2xl' >Results {filterData.length}</h1>
            <p>
                Price and other details may very based on product size and color
            </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    filterData?.map((product:any)=>{
                        return(
                            <div key={product.id} >

                            <ProductCard  product={product} />
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    </div>
  )
}

export default SearchResult