import React from 'react';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollToTop';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../../hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageItems = () => {

    const {menu,refetch} = useMenu();

    const {axiosSecure} = useAxiosSecure();


    const handleDelete= _id=>{
        Swal.fire({
            title: 'Are Your sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
            

                axiosSecure.delete(`/menu/${_id}`)
                .then(data=>{
                    // console.log(data.data)
                    refetch();

                    if(data.data?.deletedCount>0){
                        Swal.fire(
                            'Successful!',
                            'Deleted successfully!',
                            'success')
                    }
                }).catch(e=>console.error(e));

                
              //
            }
        })
    }

  
    return (
        <section className=" bg-slate-100 p-4 sm:ml-64 min-h-screen ">
            <Helmet>
                <title>Bistro Boss |  Manage Items</title>
            </Helmet>
            <ScrollToTop />

            <SectionTitle subheading="Hurry Up" heading="MANAGE ITEMS" />
            <div className=' max-w-5xl mx-auto mt-8 py-7 px-4 bg-white'>
                <p className="text-xl font-semibold">TOTAL ITEMS : {menu.length}</p>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>


                                <th scope="col" className="px-6 py-3">
                                    Item Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Update
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((i, count) => <tr key={i?._id} className="bg-white border-b  hover:bg-gray-50 ">


                                    <td className="px-6 py-4">
                                        {
                                            i?.image ?

                                                <img className="w-10 h-10 rounded-full" src={i?.image} alt={i?.name} />
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
                                        ${i?.price}
                                    </td>
                                    <td className="px-6 py-4" >
                                        <button className=" hover:bg-slate-200 p-1 rounded" >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.9099 4.15002C15.5799 6.54002 17.4499 8.41002 19.8499 9.09002" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </button>

                                    </td>
                                    <td className="px-6 py-4 flex justify-center items-center">
                                        <button className=" hover:bg-slate-100 p-1 rounded" onClick={()=>handleDelete(i?._id)} >
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
            </div>

        </section>
    );
};

export default ManageItems;
