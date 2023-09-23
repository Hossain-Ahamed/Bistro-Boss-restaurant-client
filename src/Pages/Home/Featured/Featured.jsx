import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './FeaturedItem.css'
const Featured = () => {
    return (
        <section aria-label='featured' className='my-12 featured-item bg-fixed  ' >
            <SectionTitle heading='FROM OUR MENU' subheading='Check it out' />
            <div className='md:flex justify-center items-center py-20  px-4 lg:px-36  bg-gray-100 bg-opacity-50'>
                <div >
                    <img src={featuredImg} alt="featured Image" />
                </div>
                <div className='md:ml-10 flex flex-col items-center'>
                    <p>{
                        new Date().toLocaleDateString('en-US',
                            {
                                year: 'numeric', month: 'short', day: 'numeric'
                            }
                        )
                    }</p>

                    <p className='uppercase'>Where can i get some?</p>
                    <p className='text-center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, cum magni dicta pariatur, officiis voluptatibus inventore adipisci ducimus ea sequi, iusto laboriosam amet doloribus rerum? Quam ratione ducimus atque maiores illo recusandae similique id tempora dicta voluptates, blanditiis in, expedita natus! Minima alias nostrum error illum natus ut a accusantium?
                    </p>

                    <button className="btn btn-outline  border-0 border-b-2 mt-4 hover:bg-transparent">Order Now</button>


                </div>
            </div>

        </section>
    );
};

export default Featured;