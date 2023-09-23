import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/menu`, {})
        .then(data => {
            setMenu(data.data);
        }).catch(e => {
            setError(e);
        }).finally(() => {
            setLoading(false);
        })

    }, [])

    return [menu, loading, error];
}

export default useMenu;