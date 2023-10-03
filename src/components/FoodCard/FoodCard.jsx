import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;

    const navigate = useNavigate();
    const location = useLocation();

    const { user } = useContext(AuthContext);
    const [,,refetchCartToUpdateCart] = useCart();
    const handleAddToCart = item => {
        // console.log(item);


        if (!user) {
            Swal.fire({
                title: 'Please Login to Order',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {
                        state: {
                            from: location
                        }
                    });
                }
            })

        } else {

            const data = {
                foodID: _id,
                name,
                image,
                price,
                email : user?.email
            }

            axios.post(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`, data, {
                withCredentials: true
            })
                .then(data => {
                    refetchCartToUpdateCart();
                    toast.success('Successfully added');
                    
                })
                .catch(e => console.error(e));
        }



    }

    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
            <Link href="#">
                <img className="rounded-t-lg w-full max-h-40 object-contain" src={image} alt={name} />
            </Link>
            <p className="mb-3 font-medium leading-6 text-white bg-[#111827] absolute top-0 right-0 mr-4 mt-4 px-5 py-2 ">${price}</p>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
                </a>

                <p className="mb-3 font-normal text-gray-700 ">{recipe}</p>


                <div className='flex justify-center'>
                    <button onClick={() => handleAddToCart(item)} className="inline-flex items-center py-3 px-7  border-0 border-b-2 border-b-[#BB8506] text-lg uppercase font-medium  text-center text-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] rounded-lg ">
                        add to cart
                    </button>
                </div>

            </div>
        </div>

    );
};

export default FoodCard;