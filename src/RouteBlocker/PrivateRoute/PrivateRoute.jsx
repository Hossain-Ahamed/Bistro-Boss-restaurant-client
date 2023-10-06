import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AuthLoading from '../../Pages/Shared/AuthLoading/AuthLoading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useAuth();

    const navigate = useNavigate()

    if (loading) {
        return <AuthLoading/>
    }
    if (user) {
       return children;
    }

    return (
        <Navigate to='/login'  state={ {from: location}} replace></Navigate>
   );
};

export default PrivateRoute;