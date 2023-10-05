import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user,loading } = useAuth();
    const {axiosSecure} = useAxiosSecure();
   

    const { refetch: refetchIsAdmin, isLoading:isAdminLoading, data :isAdmin} = useQuery({
        queryKey: ['Admin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('Role-axios : ', user?.email, res.data , ) 
            return res.data?.admin;
        },
    })

    return {isAdmin,isAdminLoading,refetchIsAdmin};

};

export default useAdmin; 