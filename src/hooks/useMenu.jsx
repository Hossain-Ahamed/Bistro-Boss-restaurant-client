import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useMenu = () => {
    const {axiosSecure} = useAxiosSecure();

    const {data :menu =[] ,isLoading : loading, error  ,refetch } = useQuery({
        queryKey : ['menu'],
        queryFn : async ()=>{
            const res = await axiosSecure.get(`/menu`);
            return res.data;
        }
    })

    return {menu, loading, error,refetch};
}

export default useMenu;