import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import Cookies from 'js-cookie';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users']
        , async () => {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/users`, { headers: { 'Authorization': `Bearer ${Cookies.get('access-token')}` } ,withCredentials: true});
            return res.data?.users;
        })


    const updateToAdmin = (_id ,name, role)=> {
        if(role === "Admin"){
            Swal.fire({
                icon: 'error',
                title: 'Conflict',
                text: `${name} is already an Admin`,
              })
              return;
        }
        axios.patch(`${import.meta.env.VITE_SERVER_ADDRESS}/users/admin/${_id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire(
                        'Successful!',
                        'Admin Role set!',
                        'success'
                    )
                    refetch();
                }
            })
            .catch(e => console.error(e))

    }


    return (
        <div className="max-w-5xl mx-auto min-h-screen">
            <Helmet>
                <title>Bistro Boss |  All Users</title>
            </Helmet>

            <SectionTitle subheading="How many??" heading="MANAGE ALL USERS" />
            <section className='mt-8 py-7 px-4 bg-white max-w-5xl mx-auto'>
                <p className="text-xl font-semibold">TOTAL USERS : {users.length}</p>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>

                                <th scope="col" className="px-3 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    E-mail
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((i, count) => <tr key={i?._id} className="bg-white border-b  hover:bg-gray-50 ">
                                    <td className="px-3 py-4">
                                        {count + 1}
                                    </td>

                                    <td className="px-6 py-4">
                                        {
                                            i?.photoURL ?

                                                <img className="w-10 h-10 rounded-full" src={i?.photoURL} alt={i?.name} />
                                                :
                                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full ">
                                                    <span className="font-medium text-gray-100 ">{i?.name && i?.name.split(" ").map(i => i.charAt(0).toUpperCase()).join('')}</span>
                                                </div>
                                        }

                                    </td>
                                    <td className="px-6 py-4">
                                        {i?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {i?.email}
                                    </td>
                                    <td className="px-6 py-4" >
                                        <button className=" hover:bg-slate-200 p-1 rounded" onClick={()=>updateToAdmin(i?._id,i?.name, i?.role)} title={i?.role!== "Admin" ? `Make ${i?.name} an Admin` : `${i?.name} is an ${i?.role}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>

                                    </td>
                                    <td className="px-6 py-4 flex justify-center items-center">
                                        <button className=" hover:bg-slate-100 p-1 rounded" >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.8499 9.13989L18.1999 19.2099C18.0899 20.7799 17.9999 21.9999 15.2099 21.9999H8.7899C5.9999 21.9999 5.9099 20.7799 5.7999 19.2099L5.1499 9.13989" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.3301 16.5H13.6601" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.5 12.5H14.5" stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
};

export default AllUsers;