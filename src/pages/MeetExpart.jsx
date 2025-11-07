import React from 'react';
import { useLoaderData } from 'react-router';

const MeetExpart = () => {
    const data = useLoaderData();
    // const extract = data.map(data=> data);
    // const {name} = data

    return (
        <div>
            <h1 className='text-4xl font-extrabold text-yellow-500 text-center mt-15'>Our Veterinarians and Care Team</h1>
            <div className='  flex-1 md:flex-2 lg:flex gap-5 w-11/12 mx-auto mt-20 pb-15'>
                {
                    data.map(data => (<div className='text-center border border-red-200 mx-auto my-auto p-2 rounded'>
                        <img className='h-[400px] mx-auto rounded' src={data.image} alt="" />
                        <h2 className='font-semibold my-2'>Name: {data.name}</h2>
                        <h3>title: {data.title}</h3>
                        <p>location: {data.location}</p>
                        <p>specialty: {data.specialty}</p>
                        <p>clinic: {data.clinic}</p>
                        <p>awards: {data.awards}</p>
                        <p>philosophy: {data.philosophy}</p>
                        <p>notes: {data.notes}</p>
                        <p>availability: {data.availability}</p>
                        <p>approach: {data.approach}</p>
                    </div>))
                }
            </div>
        </div>
    );
};

export default MeetExpart;