import axios from "axios";
import useAuth from "./useAuth";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useAxiosSecure = () => {
    const { provideSignOut } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
    })

    useEffect(() => {

        axiosSecure.interceptors.request.use((config) => {

            const token = Cookies.get('access-token');

            if (token) {
                
                config.headers.Authorization = `Bearer ${token}`
            }
            config.withCredentials = true
            return config;
        })
        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log('out1')
                    await provideSignOut();
                    // navigate('/login');

                }
                return Promise.reject(error);
            }
        );
    }, [provideSignOut, navigate,axiosSecure]);
    return { axiosSecure };
};

export default useAxiosSecure;