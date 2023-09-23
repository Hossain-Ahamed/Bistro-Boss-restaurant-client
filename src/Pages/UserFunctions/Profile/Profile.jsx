import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const {user} = useAuth();
    return (
        <div className='pt-16' >
            {user?.displayName}
          
            <img src={user?.photoURL} alt="" className='w-16 h-16'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea praesentium fugit atque laudantium provident delectus eligendi voluptas. Ipsum facere dolore laboriosam eaque nam quidem delectus numquam sed voluptas ullam.</p>
        </div>
    );
};

export default Profile;