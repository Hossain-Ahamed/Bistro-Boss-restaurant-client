import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';


const UserHome = () => {
    const { user } = useAuth();
    const [cart] = useCart();
    return (
        <>

            <section className='flex justify-center mt-2 sm:mt-6'>

                <div className="  bg-transparent w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                   
                    <div className="flex flex-col items-center pt-4 pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.photoURL} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">{user?.displayName}</h5>
                        <span className="text-sm text-gray-500 ">Bistro-user</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <Link to='/dashboard/my-cart' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">My cart    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-slate-100/50 rounded-full ">{cart && cart.length}</span></Link>
                            <Link to='/dashboard/reservation' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">My orders</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

};

export default UserHome;
//   <section  className='sm:ml-64'>
//             {user?.displayName}

//             <img src={user?.photoURL} alt="" className='w-16 h-16' />

//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, distinctio adipisci. Nostrum a impedit suscipit ipsum quasi est nemo beatae velit adipisci necessitatibus facere ea porro iste omnis, cum officia esse provident at, quis et tempora dicta dolore quam. Fuga tempora quam eos magnam necessitatibus voluptas, provident ducimus? Quibusdam alias accusamus optio excepturi modi sapiente quos quasi aliquid non nemo dignissimos quam eum, ut illum minus sit doloremque delectus consectetur. Consequatur id commodi nihil exercitationem temporibus sequi ratione officiis, voluptates facilis, aut nam quas? In recusandae animi veritatis, magni vero commodi. Nesciunt voluptatum nobis unde provident quo blanditiis molestias animi.
//         </section>