import React, { use } from 'react';
import HomeCardMake from './HomeCardMake';
import { NavLink } from 'react-router';
import { FaArrowRightLong } from 'react-icons/fa6';
import Emargency from './Emargency';





const HomeCard = ({ dynamicData }) => {
    const data = use(dynamicData);
    // console.log(data);
    return (
        <div>
            <div className='w-11/12 mx-auto my-10'>
                <h3 className='text-3xl font-bold text-center mb-5 '>Popular Winter Care Services</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        data.map(data => <HomeCardMake key={data.serviceId} data={data}></HomeCardMake>)
                    }
                </div>
                <div className='my-10  place-self-center-safe '>
                    {/* pet Care */}
                    <NavLink to={'/tips'}><button className='border border-red-300 py-2 mb-5 rounded-4xl px-10 text-purple-500 flex gap-5 items-center '><span>Winter Care Tips for Pets</span> <FaArrowRightLong /> </button></NavLink> 
                    {/* meet expart */}
                    <NavLink to={'/expart'}><button className='border ml-3 py-2 border-red-300 rounded-4xl px-10 text-purple-500 flex gap-5 items-center'><span>Meet Our Expert Vets</span> <FaArrowRightLong /> </button></NavLink>
                </div>

            </div>
            <div >
                <Emargency></Emargency>
            </div>
        </div>
    );
};

export default HomeCard;