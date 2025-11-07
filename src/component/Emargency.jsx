import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Emargency = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-full py-6 bg-white'>
            <div className=' bg-white p-5 rounded shadow-xl/30 shadow-cyan-500/50'>
                <img className='mb-5 mt-3' src={"https://i.ibb.co.com/prstMT90/icons8-call-doctor-64.png"} alt="" />
                <h3 className=' text-[20px] font-semibold'>24/7 Emergency Help </h3>
                <p className='my-5 text-gray-500 text-[20px]'>Healthy eating significantly boosts overall health and well-being</p>
                <p className='mb-3  font-semibold flex items-center gap-3'><span>Read More</span> <FaArrowRightLong className='text-red-500 font-bold' /> </p>
            </div>
            <div className=' bg-white p-5 rounded shadow-lg shadow-cyan-500/50'>
                <img className='mb-5 mt-3' src={"https://i.ibb.co.com/tTnphR36/icons8-hospital-room-50.png"} alt="" />
                <h3 className=' text-[20px] font-semibold'>Modern Equipment  </h3>
                <p className='my-5 text-gray-500 text-[20px]'>A balanced diet includes a variety of foods from all food groups</p>
                <p className='mb-3  font-semibold flex items-center gap-3'><span>Read More</span> <FaArrowRightLong className='text-red-500 font-bold' /> </p>
            </div>
            <div className=' bg-white p-5 rounded shadow-lg shadow-cyan-500/50'>
                <img className='mb-5 mt-3' src={"https://i.ibb.co.com/HfftrY4x/icons8-doctor-64.png"} alt="" />
                <h3 className=' text-[20px] font-semibold'>Certified Veterinars  </h3>
                <p className='my-5 text-gray-500 text-[20px]'>Complete Maintenance Services for Comfort and Peace of Mind</p>
                <p className='mb-3  font-semibold flex items-center gap-3'><span>Read More</span> <FaArrowRightLong className='text-red-500 font-bold' /> </p>
            </div>
            <div className='   bg-white p-5 rounded shadow-xl/30 shadow-cyan-500/50'>
                <img className='mb-5 mt-3' src={"https://i.ibb.co.com/H9PSKLS/icons8-dog-walking-80.png"} alt="" />
                <h3 className=' text-[20px] font-semibold'>Pet-Friendly Atmosphere </h3>
                <p className='my-5 text-gray-500 text-[20px]'>Trusted Handyman Help for All Those Small but Important Home Tasks</p>
                <p className='mb-3  font-semibold flex items-center gap-3'><span>Read More</span> <FaArrowRightLong className='text-red-500 font-bold' /> </p>
            </div>
        </div>
    );
};

export default Emargency;