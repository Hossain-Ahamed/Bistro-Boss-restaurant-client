import React from 'react';
import loadingImg from '../../../assets/others/cupcake-dribbble.gif'
const LoadingPage = () => {
    return (
        <section className='flex flex-col justify-center items-center h-screen'>
        <img src={loadingImg} alt="" />
        <p className='text-2xl font-bold text-green-500 mt-5 '>Pause and breathe, magic unfolding…</p>
    </section>
    );
};

export default LoadingPage;