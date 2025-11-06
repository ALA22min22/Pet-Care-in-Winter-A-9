import React from 'react';
// import { FaStar, FaStarOfLife } from 'react-icons/fa';

const HomeCardMake = ({data}) => {
    const {image, serviceName, price, rating, } = data;
    return (
        <div className=' min-w-[50px] mx-auto my-auto p-2 rounded-lg  bg-gray-50 shadow-md shadow-red-200'>
            <img className='rounded-lg ' src={image} alt="" />
            <h3 className='text-black font-bold my-3'>{serviceName}</h3>
            <div className='flex gap-3 justify-between items-center'>
                <p className=' p-1 text-accent border border-red-200 rounded'>Price <span className='text-black font-semibold'>${price}</span></p>
                <p className=' p-1 text-accent border border-red-200 rounded'> Ratting <span className='text-black font-semibold'>{rating}</span> </p>  
            </div>
            <button className='btn w-full bg-secondary text-white mt-2'>View Details</button>
        </div>
    );
};

export default HomeCardMake;