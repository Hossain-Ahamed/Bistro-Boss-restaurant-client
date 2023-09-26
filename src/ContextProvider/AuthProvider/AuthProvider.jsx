import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';
import axios from 'axios';
import Cookies from 'js-cookie';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const googleAuthprovider = new GoogleAuthProvider();
    const facebookAuthProvider = new FacebookAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

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



    const provideSignInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthprovider);
    }


    const provideSignInWithFaceBook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookAuthProvider);
    }

    const provideSignInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    }


    // logout 
    const provideSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const providerUpdateuserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user cred : ', currentUser);
            setLoading(false);
            if (currentUser) {
                // const user
                axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/jwt`, { email: currentUser?.email }, {withCredentials:true})
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('access-token',data.data.token);
                        Cookies.set('access-token', data.data.token, {expires : 1})
                    })
                    .catch(e => { console.error(e) })
            }else{
                localStorage.removeItem('access-token');
                Cookies.remove('access-token');
            }
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
        provideSignInWithGitHub,
        provideSignInWithFaceBook,
        providerUpdateuserProfile,
        provideSignOut,

    }

    if (loading) {
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