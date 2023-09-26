import React, { useContext, useEffect, useRef } from 'react';
import bgImage from '../../../assets/others/authentication.png';
import authLoginImage from '../../../assets/others/authentication2.png';
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop';
import { AuthContext } from '../../../ContextProvider/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import OtherSignUpMethod from '../OtherSignUpMethod/OtherSignUpMethod';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { axiosUploadProfileDataToServer } from '../../../assets/Functions/functionalities';
const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const { provideCreateUserWithEmailAndPassword, providerUpdateuserProfile, setLoading } = useContext(AuthContext);



    const onSubmit = (data) => {
        event.preventDefault();
        // console.log(data)
        if (!data?.name || !data?.password || !data?.email) {
            alert('Provide Info');
        }

        provideCreateUserWithEmailAndPassword(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                providerUpdateuserProfile(data?.name, data?.photo)
                    .then(() => {
                        // console.log(user);

                        const saveduser = {
                            name: data?.name,
                            email: data?.email,
                            photoURL: data?.photo,
                            firebase_UID: user?.uid,
                            role: 'user'

                        }
                        axiosUploadProfileDataToServer(saveduser)
                            .then(data => {
                                // console.log(data.data);
                                reset();
                                navigate('/')
                            })
                            .catch(e => console.error(e))
                    }).catch(e => console.error(e))
                   
            })
            .catch(e => console.error(e))
           
    }



    return (
        <>

            <Helmet>
                <title>Bistro Boss | Sing Up</title>
            </Helmet>
            <div className="h-screen w-screen " style={{ backgroundImage: `url(${bgImage})` }}>

                <div style={{ backgroundImage: `url(${bgImage})` }} className='w-full h-fit pb-8 max-w-[1080px]  bg-red-200 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2  shadow-black/25 shadow-[0_20px_50px_rgba(8,112,184,0.7)]'>
                    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='hidden lg:flex justify-center items-center'>
                            <img src={authLoginImage} alt="authlogin img" className='w-[450px] h-[300px] bg-transparent ' />
                        </div>
                        <form className="card" onSubmit={handleSubmit(onSubmit)}>
                            <p className='text-[#151515] text-center font-[Inter] text-3xl font-semibold my-5'>Login</p>
                            <div className="card-body m-0 py-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" {...register("name", { required: true })} className="input input-bordered" />
                                    {errors.name?.type === "required" && (
                                        <p className='mt-1 text-sm text-red-500' role="alert">name is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL Link</span>
                                    </label>
                                    <input type="url" placeholder="Type here" {...register("photo", { required: true })} className="input input-bordered" />
                                    {errors.photo?.type === "required" && (
                                        <p className='mt-1 text-sm text-red-500' role="alert">photo url is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Type here" {...register("email", { required: true })} className="input input-bordered" />
                                    {errors.email?.type === "required" && (
                                        <p className='mt-1 text-sm text-red-500' role="alert">email is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" {...register("password", {
                                        required: "*Area required",
                                        maxLength: {
                                            value: 80,
                                            message: "Max length is 80",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "* minimum length is 6",
                                        }
                                    })} className="input input-bordered" />
                                    {errors.password && (
                                        <p className='text-sm mt-1 text-red-500' role="alert">{errors.password.message}</p>
                                    )}
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className=" border rounded-lg py-2 text-white font-medium bg-[#d1a054] bg-opacity-80  hover:bg-opacity-90  focus:ring-1 ring-[#d1a054]">Sign Up</button>
                                </div>
                                <p className='mt-3 text-center text-sm text-[#D1A054]'>Already Registered? <Link to='/login' className='font-medium'>Go to log in</Link></p>
                            </div>
                            <OtherSignUpMethod />
                        </form>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    );
};

export default SignUp;