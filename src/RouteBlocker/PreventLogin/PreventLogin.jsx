import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthLoading from '../../Pages/Shared/AuthLoading/AuthLoading';

const PreventLogin = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <AuthLoading/>
    }

    if (!user) {
      return children
    }

    return (
        <Navigate to='/' replace></Navigate>
   );
};

export default PreventLogin;