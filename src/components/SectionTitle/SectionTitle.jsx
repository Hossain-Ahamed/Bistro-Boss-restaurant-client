import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='md:w-2/4 mx-auto text-center my-8 select-none'>
            <p className='text-yellow-600 text-xl text-center mb-2 '>----{subheading}----</p>
            <h3 className='text-3xl uppercase border-y-2   py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;