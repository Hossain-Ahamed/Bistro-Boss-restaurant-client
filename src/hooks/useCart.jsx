
import { useQuery } from '@tanstack/react-query';
import useAuth from "./useAuth";
const useCart = () =>{
    const {user} = useAuth();
    const { refetch :refetchCartToUpdateCart, isLoading, data : cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts?email=${user?.email}`);

           return response.json();
        },
      })

   return [cart, isLoading, refetchCartToUpdateCart];
    

}
export default useCart;