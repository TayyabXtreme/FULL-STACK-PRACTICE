import React from 'react'

const LocationSearchPanal = ({vehiclePanal,setVehiclePanal,setPanalOpen}) => {

    const locations = [
        "24B, Near Kapoor's cafe, Sheriyans Coading School, Bhopal",
        "25A, Near John's bakery, Sheriyans Coading School, Bhopal",
        "26C, Near Smith's store, Sheriyans Coading School, Bhopal",
        "27D, Near Mike's gym, Sheriyans Coading School, Bhopal",
        "28E, Near Lucy's salon, Sheriyans Coading School, Bhopal",
        "29F, Near Emma's library, Sheriyans Coading School, Bhopal"
    ];

return (
    <div className='h-full overflow-scroll scroll-hide'>
        {locations.map((location, index) => (
            <div onClick={()=>{
                
                setVehiclePanal(true);
                setPanalOpen(false);
                
            }} key={index} className='flex gap-4 border-2 active:border-black border-gray-100 p-3 rounded-xl items-center justify-start my-2'>
                <h2 className='bg-[#eee] rounded-full h-8 w-12 flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{location}</h4>
            </div>
        ))}
    </div>
)
}

export default LocationSearchPanal