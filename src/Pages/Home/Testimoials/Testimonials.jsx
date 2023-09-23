import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import axios from 'axios';

const Testimonials = () => {
    const [reviews, setreview] = useState([]);
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/reviews`)
            .then(data => {
                setreview(data.data);
            }).catch(e => {

            })
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle
                heading='Testimonials'
                subheading='what our client said'
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper m-24">


                {
                    Array.isArray(reviews) && reviews.map(item =>
                        <SwiperSlide key={item?._id} className=''>
                            <div className=' px-8 lg:px-36 flex flex-col items-center text-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item?.rating}
                                    readOnly
                                />
                                <p className='  text-black text-lg leading-5'>{item?.details}</p>
                                <h3 className='text-[#CD9003] font-medium text-3xl text-center'>{item?.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>


        </section>
    );
};

export default Testimonials;