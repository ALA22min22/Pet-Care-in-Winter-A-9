import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const { setUser, userSignUp, GoogleLogin, setShowPassword, showPassword } = use(AuthContext);

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, photo, password);

        //Password Validation:
        const passwordCherecters = /^[\s\S]{6,}$/;
        const passwordUpperCase = /^(?=.*[A-Z]).+$/;
        const passwordLowerCase = /^(?=.*[a-z]).+$/;


        if (!passwordCherecters.test(password)) {
            setError("Password must be 6 cherechters or more");
            return;
        }
        else if (!passwordUpperCase.test(password)) {
            setError("Password must have 1 or more Uppercase latter")
            return;
        }
        else if (!passwordLowerCase.test(password)) {
            setError("Password must have 1 or more Lowercase latter")
            return;
        }
        else {
            setError("");
        }


        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)

                navigate('/');
            })
            .catch(error => {
                const errorCode = error.code;

                toast(errorCode);
            })


    }

    //Google Login
    const googleSignIn = () => {
        GoogleLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)

                navigate('/');
            })
            .catch(error => {
                const errorCode = error.code;

                toast(errorCode);
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="name" name='name' className="input" placeholder="Name" required />
                            {/* Photo Url */}
                            <label className="label">Photo Url</label>
                            <input type="text" name='photo' className="input" placeholder="Photo Url" required />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* password */}
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input type={showPassword? "text" : "password"} name='password' className="input" placeholder="Password" required />
                                <button onClick={()=> setShowPassword(!showPassword)} type='button' className="btn btn-xs absolute top-2 right-6">{showPassword? <FaRegEye /> : <FaRegEyeSlash />}</button>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            

                            <button type='submit' className="btn btn-neutral mt-4">SignUp</button>

                        </fieldset>
                    </form>

                    {/* Google */}
                    <button onClick={googleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p>You have already account? <Link to={'/auth/login'} className='text-red-500'>Login</Link> </p>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;