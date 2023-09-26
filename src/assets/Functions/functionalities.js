import axios from "axios"

const axiosUploadProfileDataToServer = (saveduser)=>{
   return axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/users`, saveduser, { withCredentials: true })
    
}


export {axiosUploadProfileDataToServer};