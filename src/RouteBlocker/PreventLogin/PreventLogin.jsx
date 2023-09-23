import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const PreventLogin = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <><p>Loading..</p></>
    }

    if (!user) {
      return children
    }

    return (
        <Navigate to='/' replace></Navigate>
   );
};

export default PreventLogin;