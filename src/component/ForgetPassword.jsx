import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const ForgetPassword = () => {
    const { email } = use(AuthContext);
    const [input, setInput] = useState('');
   

    useEffect(()=>{
        if(email){
            setInput(email)
        }

    },[email])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleReset = () => {
        window.location.href = "https://mail.google.com";
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center text-secondary font-bold">Forget Password now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" value={input} name='email' onChange={(e)=> setInput(e.target.value)} className="input" placeholder="Email" />
                            {/* reset */}
                            <button onClick={handleReset} className="btn bg-secondary text-white mt-4">Reset</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;