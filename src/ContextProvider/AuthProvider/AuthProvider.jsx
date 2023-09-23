import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const googleAuthprovider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provideCreateUserWithEmailAndPassword = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }



    const provideSignInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    const provideSignInWithGoogle = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthprovider);
    }


    // logout 
    const provideSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const providerUpdateuserProfile = (name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user cred : ', currentUser);
            setLoading(false);
        });

        return () => {
            return unSubscribe()
        };
    }, [auth])



    const authInfo = {

        user,
        loading,
        setLoading,
        provideCreateUserWithEmailAndPassword,
        provideSignInWithEmailAndPassword,
        provideSignInWithGoogle,
        providerUpdateuserProfile,
        provideSignOut,

    }

    if(loading){
        return <>
        <p>loading</p></>
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;