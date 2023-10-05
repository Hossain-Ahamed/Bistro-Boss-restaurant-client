import React from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollToTop';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const { user, loading } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    const { refetch: refetchStat, isLoading, error, data: stat = {} } = useQuery({
        queryKey: ['stat'],
        enabled: (!loading && !!user),
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-stat`);
            // console.log('res from axios', res.data)
            return res.data;
        },
    })

    if (isLoading) {
        return <>Loading...</>
    }
    if (error) {
        console.log(error)
        return <></>
    }
    return (
        <section className='min-h-screen bg-slate-100 p-4 sm:ml-64'>
            <Helmet>
                <title>Bistro Boss |  Admin</title>
            </Helmet>

            <h2 className='text-2xl'>Hi, {user?.displayName}</h2>

            <div className="stats stats-vertical md:stats-horizontal shadow mt-5 w-full max-w-7xl">

                <div className="stat">

                    <div className="stat-title">Total users</div>
                    <div className="stat-value text-primary">{stat?.users}</div>
                    <div className="stat-desc">Total Registered Users</div>
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value">{stat?.products}</div>
                    <div className="stat-desc ">Total items in restaurant </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value text-secondary">{stat?.orders}</div>
                    <div className="stat-desc">Revenue earned : <span className='font-semibold'>$ {stat?.total}</span></div>
                </div>



            </div>


            <ScrollToTop />
        </section>
    );
};

export default AdminHome;