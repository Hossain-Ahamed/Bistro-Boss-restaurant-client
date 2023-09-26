import React, { useContext, useEffect, useRef } from 'react';
import bgImage from '../../../assets/others/authentication.png';
import authLoginImage from '../../../assets/others/authentication2.png';
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../ContextProvider/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OtherSignUpMethod from '../OtherSignUpMethod/OtherSignUpMethod';
import Swal from 'sweetalert2'
const Login = () => {
   

    const { provideSignInWithEmailAndPassword ,setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';
    const captchaRef = useRef(null);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        const captchaValue = captchaRef.current.value;
        if (!validateCaptcha(captchaValue)) {
            alert('Captcha doesnt Matched');
            return;
        }

        if (!email || !password) {
            alert('Provide Info');
        }

        provideSignInWithEmailAndPassword(email, password)
            .then(result => {
                // const user = result.user;
                
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from,{replace:true});
            }).catch(e=>{})
            .finally(()=>{setLoading(false)})
    }


    return (
        <>

            <Helmet>
                <title>Bistro Boss | LogIn</title>
            </Helmet>
            <div className="h-screen w-screen " style={{ backgroundImage: `url(${bgImage})` }}>

                <div style={{ backgroundImage: `url(${bgImage})` }} className='w-full h-fit pb-8 max-w-[1080px]  bg-red-200 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2  shadow-black/25 shadow-[0_20px_50px_rgba(8,112,184,0.7)]'>
                    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='hidden lg:flex justify-center items-center'>
                            <img src={authLoginImage} alt="authlogin img" className='w-[450px] h-[300px] bg-transparent ' />
                        </div>
                        <form className="card" onSubmit={handleSubmit}>
                            <p className='text-[#151515] text-center font-[Inter] text-3xl font-semibold my-5'>Login</p>
                            <div className="card-body m-0 py-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6 bg-transparent">
                                    <LoadCanvasTemplate className='bg-transparent' />

                                </div>
                                <div className="form-control">

                                    <input type="text" ref={captchaRef} placeholder="Type Here" name='captcha' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className=" border rounded-lg py-2 text-white font-medium bg-[#d1a054] bg-opacity-80  hover:bg-opacity-90  focus:ring-1 ring-[#d1a054]">Login</button>
                                </div>
                            </div>
                            <p className='mt-3 text-center text-sm text-[#D1A054]'>New Here? <Link to='/sign-up' className='font-medium'>Create a New Account</Link></p>
                        </form>
                        <OtherSignUpMethod />
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    );
};

export default Login;