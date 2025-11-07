import React from 'react';
import { useLoaderData } from 'react-router';
import ServicesCard from '../component/ServicesCard';
import { toast, ToastContainer } from 'react-toastify';


const Service = () => {
    const data = useLoaderData();

    const handleSubmit = (e)=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        // console.log(name, email);
        
        toast('Book Is Successfull')
        e.target.reset();
    }

    

    
    return (
        <div>
            <section className='w-11/12 mx-auto my-20'>
            <h3 className='text-3xl font-bold text-center mb-8'>Our Services Proper Details And Book The Service</h3>
                <div className='grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 '>
                    {
                        data.map(data => <ServicesCard key={data.serviceId} data={data}></ServicesCard>)
                    }
                </div>
            </section>

            <section className='flex justify-center items-center '>
                <div className="card border border-red-200 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl text-center font-bold pt-2">Book Service</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                
                                <input type="name" name='name' className="input w-full" placeholder="Name" />

                                
                                <input type="email" name='email' className="input w-full" placeholder="Email" />

                                <button  className="btn bg-secondary text-white mt-4">Book Now</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </section>
        </div>
    );
};

export default Service;