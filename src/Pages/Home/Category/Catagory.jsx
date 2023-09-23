import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

import img1 from '../../../assets/HomeCategory/slide1.jpg'
import img3 from '../../../assets/HomeCategory/slide3.jpg'
import img4 from '../../../assets/HomeCategory/slide4.jpg'
import img2 from '../../../assets/HomeCategory/slide2.jpg'
import img5 from '../../../assets/HomeCategory/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Catagory = () => {
    const data = [
        {
            img: img1,
            text: 'salad'

        },
        {
            img: img2,
            text: 'pizza'

        },
        {
            img: img3,
            text: 'Soup'

        },
        {
            img: img4,
            text: 'Deseert'

        },
        {
            img: img5,
            text: 'salad'

        }]
    return (
        <section>
            <SectionTitle heading='ORDER ONLINE' subheading='From 11:00am to 10:00pm-'/>

            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-6"
            >

                {
                    data.map((card, _idx) => (
                        <SwiperSlide key={_idx}>
                            <img src={card.img} />
                            <h3 className="text-3xl text-center -mt-12 text-white">{card.text}</h3>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>

    );
};

export default Catagory;