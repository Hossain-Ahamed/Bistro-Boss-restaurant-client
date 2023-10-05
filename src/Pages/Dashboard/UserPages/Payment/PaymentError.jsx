import React from 'react';

const PaymentError = ({message}) => {
    return (
        
        <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
        <span className="flex gap-y-2 gap-x-1 items-center font-medium text-red-800">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#991b1b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75" stroke="#991b1b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3599 8.75C14.3599 7.75 15.9899 7.75 16.9999 8.75" stroke="#991b1b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.4 17.7H15.6C16.1 17.7 16.5 17.3 16.5 16.8C16.5 14.31 14.49 12.3 12 12.3C9.51 12.3 7.5 14.31 7.5 16.8C7.5 17.3 7.9 17.7 8.4 17.7Z" stroke="#991b1b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            Something went wrong
        </span>

        <p className="mt-2 text-sm text-red-700">
            {message}
        </p>
    </div>
    );
};

export default PaymentError;