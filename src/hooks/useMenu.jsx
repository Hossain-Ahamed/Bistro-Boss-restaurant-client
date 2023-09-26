import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import useAxiosSecure from "./useAxiosSecure";
const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {axiosSecure} = useAxiosSecure();
    useEffect(() => {

        axiosSecure.get(`/menu`)
        .then(data => {
            setMenu(data.data);
        }).catch(e => {
            setError(e);
        }).finally(() => {
            setLoading(false);
        })

    }, [axiosSecure])

    return [menu, loading, error];
}

export default useMenu;