import React, { use, useEffect } from 'react';
import { NavLink } from 'react-router';
import userLogo from "../assets/user.png";
import petLogo from "../assets/pet-logo.jpg";
import { AuthContext } from '../Provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {

    const { user, userSignOut } = use(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                toast("Sign-Out Sucessfull", result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // AOS effect
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);


    const Link = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/services'}><li><a>Services</a></li></NavLink>
        <NavLink to={'/profile'}><li><a>My Profile</a></li></NavLink>
    </>
    return (
        <div className="navbar bg-[#EEF9EE] shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Link}
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <div data-aos="flip-left"  >
                        <img className='w-[50px] rounded-full' src={petLogo} alt="" />
                    </div>
                    <a className="btn-ghost text-xl">Pet Care in Winter</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    {Link}
                </ul>
            </div>
            <div className="navbar-end gap-2 items-center">
                <div data-aos="fade-in"
                    className="animate__animated animate__bounce animate-duration: 800ms ">
                    {
                        user? <img className="w-[50px]" src={user.photoURL} alt="" title={user.displayName} /> : <img className='rounded-4xl ' src={userLogo} alt="" />
                    }
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Log Out</button> :
                        <NavLink to={'/auth/login'}><a className="btn">Login</a></NavLink>
                }
                <Toaster />
            </div>
        </div>
    );
};

export default Header;