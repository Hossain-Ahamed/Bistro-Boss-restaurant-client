
import { useQuery } from '@tanstack/react-query';
import useAuth from "./useAuth";

import useAxiosSecure from './useAxiosSecure';
import Cookies from 'js-cookie';
const useCart = () => {
    const { user,loading } = useAuth();
    const {axiosSecure} = useAxiosSecure();
   

    const { refetch: refetchCartToUpdateCart, isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email,axiosSecure],
        enabled: !loading,
        queryFn: async () => {
           
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            // console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [cart, isLoading, refetchCartToUpdateCart];


}
export default useCart;

