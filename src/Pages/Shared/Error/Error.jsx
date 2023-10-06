import React from 'react';
import ErrorImg from '../../../assets/404.gif'
import { Link } from 'react-router-dom';

const Error = ({ message }) => {
    return (
        <section className='flex flex-col justify-center items-center h-screen'>
            <img src={ErrorImg} alt="" />
            {
                message ?
                    <p className='text-2xl font-bold text-red-500 mt-5 '>Error: {message}</p>
                    :

                    <p className='text-2xl font-bold text-red-500 mt-5 '>Error: The Page you are looking for is not found</p>
            }
            <Link to="/" className='text-xl font-medium text-green-400 hover:underline '>Go to Home</Link>
        </section>
    );
};

export default Error;