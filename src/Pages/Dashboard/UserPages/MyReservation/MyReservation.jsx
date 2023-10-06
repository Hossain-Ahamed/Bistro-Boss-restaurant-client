import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollToTop';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../../Shared/LoadingPage/LoadingPage';
import Error from '../../../Shared/Error/Error';
import { Link } from 'react-router-dom';

const MyReservation = () => {
    const {axiosSecure} = useAxiosSecure();
    const { user, loading } = useAuth();
  
    const { refetch: refetchOrder, isLoading, error, data: orders = [] } = useQuery({
        queryKey: ['reservation'],
        enabled: (!loading && !!user),
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-orders/${user?.email}`);
            // console.log('res from axios', res.data)
            return res.data;
        },
    })

    if (isLoading) {
        return <LoadingPage/>
    }
    if (error) {
        console.log(error);

        return <Error message={(error?.response?.status + error?.code) } />
    }


   

  
    return (
        <section className=" bg-slate-100 p-4 sm:ml-64 min-h-screen ">
            <Helmet>
                <title>Bistro Boss |  My orders</title>
            </Helmet>
            <ScrollToTop/>

            <SectionTitle subheading="My Orders" heading="See You History" />
            <div className=' max-w-6xl mx-auto mt-8 py-7 px-4 bg-white'>
                <p className="text-xl font-semibold">TOTAL Orders : {orders.length}</p>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>


                              
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Ordered Poduct
                                </th>
                                <th scope="col" className="px-6 py-3  text-center">
                                    order date
                                </th>
                                <th scope="col" className="px-6 py-3  text-center">
                                    Transaction ID
                                </th>
                                <th scope="col" className="px-6 py-3  text-center">
                                    Price
                                </th>

                                <th scope="col" className="px-6 py-3  text-center">
                                    status
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((i, count) => <tr key={i?._id} className="bg-white border-b  hover:bg-gray-50 ">


                                 
                                    <td className="px-6 py-4">
                                        #{i?._id.slice(-6)}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {i?.orderLength}
                                    </td>
                                    <td className="px-6 py-4  text-center">
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(i?.date))}
                                    </td>
                                    <td className="px-6 py-4  text-center">
                                        {i?.transactionID}
                                    </td>
                                    <td className="px-6 py-4  text-center">
                                        ${i?.price}
                                    </td>
                                    <td className="px-6 py-4 text-center text-yellow-500" >
                                      {i?.status}

                                    </td>
                                    <td className="px-6 py-4 flex justify-center items-center">
                                       <Link className='hover:underline text-blue-400' to={i?._id}>See Details</Link>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default MyReservation;