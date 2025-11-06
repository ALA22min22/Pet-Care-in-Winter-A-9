


import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { auth } from "../Firebase/Firebase.config";


export const AuthContext = createContext();

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    //user State
    const [user, setUser] = useState(null);

    //forget password email handle
    const [email, setEmail] = useState('')
    
    // console.log(user)

    //Loading show before finding the user
    const [loading, setLoading] = useState(true);

    // Eay Toggle for password viewing
     const [showPassword, setShowPassword] = useState(false);


    //SignUp
    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign Out
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //Sign In
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with Google
    const GoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    }

    //Update Profile
    const UpdateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    // Handle Behavior
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
        
    }, []);

    const authData = {
        user,
        setUser,
        userSignUp,
        GoogleLogin,
        userSignIn,
        userSignOut,
        loading,
        UpdateUserProfile,
        setEmail,
        email,
        showPassword,
        setShowPassword,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;