import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    const {UpdateUserProfile, setUser, user} = use(AuthContext);
    const navigate = useNavigate();

    const hanldeSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        UpdateUserProfile({
            displayName: name, photoURL: photo
        }).then(()=>{
            setUser({...user, displayName: name, photoURL: photo})

            navigate('/profile');
            toast("Update Sucessfull");

        })
        .catch(error => {
            console.log(error);
            setUser(user);
        })


    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center text-secondary font-bold">Update now!</h1>
                <div className="card-body">
                    <form onSubmit={hanldeSubmit}>
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">New Name</label>
                            <input type="name" name='name' className="input" placeholder="New Name" />
                            {/* password */}
                            <label className="label">New Photo Url</label>
                            <input type="text" name='photo' className="input" placeholder="New Photo Url" />
                            
                            <button className="btn bg-secondary text-white mt-4">Update</button>
                        </fieldset>
                    </form>
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;