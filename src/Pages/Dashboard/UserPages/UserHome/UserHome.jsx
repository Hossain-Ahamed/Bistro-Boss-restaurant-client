import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <section  className='sm:ml-64'>
            {user?.displayName}

            <img src={user?.photoURL} alt="" className='w-16 h-16' />

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, distinctio adipisci. Nostrum a impedit suscipit ipsum quasi est nemo beatae velit adipisci necessitatibus facere ea porro iste omnis, cum officia esse provident at, quis et tempora dicta dolore quam. Fuga tempora quam eos magnam necessitatibus voluptas, provident ducimus? Quibusdam alias accusamus optio excepturi modi sapiente quos quasi aliquid non nemo dignissimos quam eum, ut illum minus sit doloremque delectus consectetur. Consequatur id commodi nihil exercitationem temporibus sequi ratione officiis, voluptates facilis, aut nam quas? In recusandae animi veritatis, magni vero commodi. Nesciunt voluptatum nobis unde provident quo blanditiis molestias animi.
        </section>
    );

};

export default UserHome;