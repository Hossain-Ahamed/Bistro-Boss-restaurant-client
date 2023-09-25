import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, item) => item?.price + sum, 0)
    return (
        <>
            <Helmet>
                <title>Bistro Boss |  Cart</title>
            </Helmet>

            <SectionTitle subheading="My Cart" heading="WANNA ADD MORE?" />

            <section className='mt-8 py-7 px-4 bg-white max-w-5xl mx-auto'>
                <div className='grid grid-cols-5 text-xl  justify-center items-center '>
                    <div className='col-span-2 font-bold'>
                        <p >Total Orders: {cart.length} </p>
                    </div>
                    <div className='col-span-2 font-bold'>
                        <p>Total Price:${total} </p>
                    </div>
                    <div className='col-span-1 flex justify-center'>

                        <button className='uppercase font-medium text-base text-white max-w-fit bg-[#D1A054] border-0 p-2 rounded'>Pay</button>
                    </div>
                </div>
                
                {/* table  */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">

                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>

                                <th scope="col" className="px-3 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Item Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Item Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart && Array.isArray(cart) && cart.map((i, count) => <tr key={i?._id} className="bg-white border-b  hover:bg-gray-50 ">
                                    <td className="px-3 py-4">
                                        {count + 1}
                                    </td>

                                    <td className="px-6 py-4">
                                        <img className="w-10 h-10 rounded-full" src={i?.image} alt={i?.name} />

                                    </td>
                                    <td className="px-6 py-4">
                                        {i?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${i?.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.8499 9.13989L18.1999 19.2099C18.0899 20.7799 17.9999 21.9999 15.2099 21.9999H8.7899C5.9999 21.9999 5.9099 20.7799 5.7999 19.2099L5.1499 9.13989" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.3301 16.5H13.6601" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.5 12.5H14.5" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>


            </section>
        </>
    );
};

export default MyCart;