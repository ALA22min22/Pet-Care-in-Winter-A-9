import React from 'react';

const ServicesCard = ({ data }) => {

    const { serviceId, image, serviceName, price, rating, providerName, providerEmail, slotsAvailable, description, category } = data;
    return (
        <div className=' min-w-[50px] mx-auto my-auto p-2 rounded-lg  bg-[#B9E8FC] shadow-md shadow-red-200'>
            <div className='flex justify-between items-center mb-3'>
                <h3 className='text-black font-bold '>{serviceName} <span className='p-1 text-accent border border-red-200 rounded'>{serviceId}</span> </h3>
                <p className='p-1 font-semibold bg-blue-50 border  rounded'>{category}</p>
            </div>
            <img className='rounded-lg ' src={image} alt="" />
            <h3 className='text-center mt-2 font-semibold'>Provide By: {providerName}</h3>
            <h4 className='text-accent text-[13px] text-center'>Contact: {providerEmail}</h4>

            <div className='flex gap-3 justify-between items-center my-3'>
                <p className=' p-1 text-accent border border-red-200 rounded'>Price <span className='text-black font-semibold'>${price}</span></p>
                <p className=' p-1 text-accent border border-red-200 rounded'> Ratting <span className='text-black font-semibold'>{rating}</span> </p>
                <p className=' p-1 text-accent border border-red-200 rounded'>Slots <span className='text-black font-semibold'>{slotsAvailable}</span> </p>
            </div>
            <p className='text-accent mb-1'>{description}</p>

        </div>
    );
};

export default ServicesCard;