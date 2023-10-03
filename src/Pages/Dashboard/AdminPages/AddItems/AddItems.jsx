import React from 'react';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollToTop';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItems = () => {

    // VITE_Image_Upload_Token
    const { register, handleSubmit ,reset} = useForm();
    const {axiosSecure} = useAxiosSecure();

      const handledata = (data) =>{
        // console.log(data);
        const formData = new FormData();
        formData.append('image',data.image[0]);
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Token}`,formData)
        .then(imgRes=>{
            // console.log(imgRes.data);
            if(imgRes?.data.success){
                const imgURL = imgRes.data?.data?.display_url;
                const menudata = {
                    name : data?.name,
                    price : parseFloat(data?.price),
                    category : data?.category,
                    recipe : data?.recipe,
                    image : imgURL
                }

                // console.log(menudata)
                axiosSecure.post(`/add-items`,menudata)
                .then(response=>{
                    // console.log(response.data);
                    Swal.fire(
                        'Successful!',
                        'Item Added Successfully!',
                        'success'
                    )
                    reset();
                    // TODO : navigate to manage products 
                   
                })
                .catch(e=>console.error(e))
            }
        })
        .catch(e=>console.error(e))
      }
    return (
        <section>
            <ScrollToTop />
            <SectionTitle heading="ADD AN ITEM" subheading="What's New?" />

            <form onSubmit={handleSubmit(handledata)} className='bg-slate-100 w-full max-w-[800px]  mx-auto p-7'>
                <div className="mb-6">
                    <label htmlFor="recipename" className="block mb-2 text-sm font-medium text-gray-900 ">Recipe Name*</label>
                    <input {...register("name")}  type="text" id="recipename" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="baby corn soup" required />
                </div>
                <div className='grid grid-cols-2 gap-x-3'>
                    <div className="mb-6 ">

                        <label htmlFor="Category" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                        <select id="Category" defaultValue=""  {...register("category",{required:true, })}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option value="" disabled>Category</option>
                            <option value="pizza">Pizza</option>
                            <option value="salad">Salad</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                           
                        </select>

                    </div>
                    <div className="mb-6 ">
                        <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 "> Price*</label>
                        <input {...register("price")} type="text" id="Price"    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                </div>

                <div className="mb-6">

                    <label htmlFor="Recipe-Details" className="block mb-2 text-sm font-medium text-gray-900 ">Recipe Details</label>
                    <textarea {...register("recipe")} id="Recipe-Details"   rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write Recipe Details Here..."></textarea>

                </div>

                <div className="flex items-center justify-center w-full  mb-6">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input {...register("image")}  id="dropzone-file" type="file"    accept="image/*" className="text-gray-400 text-sm text-center" />
                    </label>
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add Item</button>
            </form>

        </section>
    );
};

export default AddItems;