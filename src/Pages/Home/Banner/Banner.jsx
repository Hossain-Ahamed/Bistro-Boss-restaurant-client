import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/bannerHome/01.jpg';
import img2 from '../../../assets/bannerHome/02.jpg';
import img3 from '../../../assets/bannerHome/03.png';
import img4 from '../../../assets/bannerHome/04.jpg';
import img5 from '../../../assets/bannerHome/05.png';
import img6 from '../../../assets/bannerHome/06.png';
const Banner = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    

    return (
        <div className='max-h-'>
            <Carousel  showArrows={true} autoPlay={true}  infiniteLoop={true} interval={3000} stopOnHover={false}>

                {
                    images.map((img, _idx) => (
                        <div key={_idx}>
                            <img src={img} />                         
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Banner;