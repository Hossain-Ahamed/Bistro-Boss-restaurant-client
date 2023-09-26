
import { useQuery } from '@tanstack/react-query';
import useAuth from "./useAuth";
import axios from 'axios';
import Cookies from 'js-cookie';
const useCart = () => {
    const { user } = useAuth();
    const { refetch: refetchCartToUpdateCart, isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],

        queryFn: async () => {
            //     const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/carts?email=${user?.email}`,{headers: {'Authorization' : `Bearer ${Cookies.get('access-token')}`}});

            //    return response.json();
            const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/carts?email=${user?.email}`, { headers: { 'Authorization': `Bearer ${Cookies.get('access-token')}` } ,withCredentials: true});

            return response.data;
        },
    })

    return [cart, isLoading, refetchCartToUpdateCart];


}
export default useCart;

// const response = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/carts?email=${user?.email}`,{ withCredentials: true,headers: {'Authorization' : `Bearer ${Cookies.get('access-token')}`}});

// return response.data;