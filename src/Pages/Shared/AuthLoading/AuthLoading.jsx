import React from 'react';
import loadingImg from '../../../assets/others/authentication.gif'
const AuthLoading = () => {
    return (
        <section className='flex flex-col justify-center items-center h-screen'>
        <img src={loadingImg} alt=""/>
        
    </section>
    );
};

export default AuthLoading;