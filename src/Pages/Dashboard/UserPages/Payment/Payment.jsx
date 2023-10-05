import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../../hooks/useCart';

const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  };
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

//todo :publish key

const Payment = () => {
    const [cart] = useCart();
    // console.log(cart)
    const total = cart.reduce((sum, item) => item?.price + sum, 0);
    return (
        <section className='min-h-screen  p-4 sm:ml-64'>
            <Helmet>
                <title>Bistro Boss |  Payment</title>
            </Helmet>
            <SectionTitle heading="Payment" subheading="Please Provide" />
            <Helmet>
                <title>Bistro Boss |  Cart</title>
            </Helmet>
            <div className='mt-8 py-7 px-4 bg-white max-w-xl mx-auto '>


                <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                    <CheckOutForm cart={cart} price={parseFloat(total.toFixed(2))}/>
                </Elements>


            </div>
        </section>
    );
};

export default Payment;