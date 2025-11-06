import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import 'animate.css';


const Profile = () => {
    const { user } = use(AuthContext);
    return (
        <div className='mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div data-aos="fade-in"
                            className="animate__animated animate__bounce animate__infinite">
                            <img className='mx-auto rounded-4xl mb-5 w-4/12' src={user.photoURL} alt="" />
                        </div>
                        <h1 className="text-5xl font-bold text-blue-500">  {user.displayName}</h1>
                        <p className="py-6 text-blue-500">
                            <span className='text-black font-bold'>Email:</span>  {user.email}
                        </p>
                        <Link to={'/update'}><button className="btn bg-secondary text-white">Update Profile</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;