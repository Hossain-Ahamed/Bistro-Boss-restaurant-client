import React from 'react';
import { NavLink } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Dashboard_User = () => {
    const [cart] = useCart();
    return (
        <>
                <li>
                                <NavLink to='/dashboard/user-home' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 9V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 13.5H16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="ml-3">User Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9702 22H4.97021C1.97021 22 1.97021 20.65 1.97021 19V18C1.97021 17.45 2.42021 17 2.97021 17H20.9702C21.5202 17 21.9702 17.45 21.9702 18V19C21.9702 20.65 21.9702 22 18.9702 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.72 13V17H3.27002V13C3.27002 9.16 5.98002 5.95 9.59002 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 11H9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="flex-1 ml-3 whitespace-nowrap">Reservation</span>
                                    {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ">Pro</span> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment-history' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.6604 2.51814L12.6304 2.58814L9.73045 9.31814H6.88045C6.20045 9.31814 5.55045 9.45814 4.96045 9.70814L6.71045 5.52814L6.75045 5.42814L6.82045 5.26814C6.84045 5.20814 6.86045 5.14814 6.89045 5.09814C8.20045 2.06814 9.68045 1.37814 12.6604 2.51814Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.0505 9.51813C17.6005 9.37813 17.1205 9.31813 16.6405 9.31813H9.73047L12.6305 2.58813L12.6605 2.51813C12.8105 2.56813 12.9505 2.63813 13.1005 2.69813L15.3105 3.62813C16.5405 4.13813 17.4005 4.66813 17.9205 5.30813C18.0205 5.42813 18.1005 5.53813 18.1705 5.66813C18.2605 5.80813 18.3305 5.94813 18.3705 6.09813C18.4105 6.18813 18.4405 6.27813 18.4605 6.35813C18.7305 7.19813 18.5705 8.22813 18.0505 9.51813Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.5222 14.1984V16.1484C21.5222 16.3484 21.5122 16.5484 21.5022 16.7484C21.3122 20.2384 19.3622 21.9984 15.6622 21.9984H7.86221C7.62221 21.9984 7.38221 21.9784 7.15221 21.9484C3.97221 21.7384 2.27221 20.0384 2.06221 16.8584C2.03221 16.6284 2.01221 16.3884 2.01221 16.1484V14.1984C2.01221 12.1884 3.23221 10.4584 4.97221 9.70836C5.57221 9.45836 6.21221 9.31836 6.89221 9.31836H16.6522C17.1422 9.31836 17.6222 9.38836 18.0622 9.51836C20.0522 10.1284 21.5222 11.9884 21.5222 14.1984Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.71049 5.52814L4.96049 9.70814C3.22049 10.4581 2.00049 12.1881 2.00049 14.1981V11.2681C2.00049 8.42814 4.02049 6.05814 6.71049 5.52814Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.5191 11.2677V14.1977C21.5191 11.9977 20.0591 10.1277 18.0591 9.52766C18.5791 8.22766 18.7291 7.20766 18.4791 6.35766C18.4591 6.26766 18.4291 6.17766 18.3891 6.09766C20.2491 7.05766 21.5191 9.02766 21.5191 11.2677Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Payment History</span>
                                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">3</span> */}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/my-cart' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">My cart</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">{cart && cart.length}</span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/add-review' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7499 2.44982C11.4399 1.85982 12.5699 1.85982 13.2699 2.44982L14.8499 3.80993C15.1499 4.06993 15.7099 4.2799 16.1099 4.2799H17.8099C18.8699 4.2799 19.7399 5.14983 19.7399 6.20983V7.90991C19.7399 8.29991 19.9499 8.86992 20.2099 9.16992L21.5699 10.7499C22.1599 11.4399 22.1599 12.5699 21.5699 13.2699L20.2099 14.8498C19.9499 15.1498 19.7399 15.7099 19.7399 16.1099V17.8099C19.7399 18.8699 18.8699 19.7399 17.8099 19.7399H16.1099C15.7199 19.7399 15.1499 19.9498 14.8499 20.2098L13.2699 21.5698C12.5799 22.1598 11.4499 22.1598 10.7499 21.5698L9.16989 20.2098C8.86989 19.9498 8.30988 19.7399 7.90988 19.7399H6.17987C5.11987 19.7399 4.24988 18.8699 4.24988 17.8099V16.0998C4.24988 15.7098 4.03989 15.1498 3.78989 14.8498L2.43988 13.2599C1.85988 12.5699 1.85988 11.4499 2.43988 10.7599L3.78989 9.16992C4.03989 8.86992 4.24988 8.30992 4.24988 7.91992V6.20983C4.24988 5.14983 5.11987 4.2799 6.17987 4.2799H7.90988C8.29988 4.2799 8.86989 4.06993 9.16989 3.80993L10.7499 2.44982Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.89014 14.82L11.3401 15.94C11.5301 16.13 11.9501 16.22 12.2301 16.22H14.0001C14.5601 16.22 15.1701 15.8 15.3101 15.24L16.4301 11.82C16.6601 11.17 16.2401 10.6 15.5401 10.6H13.6701C13.3901 10.6 13.1601 10.3701 13.2001 10.0401L13.4301 8.54008C13.5201 8.12008 13.2401 7.65005 12.8201 7.51005C12.4501 7.37005 11.9801 7.56 11.7901 7.84L9.87012 10.69" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M7.5 14.8201V10.2401C7.5 9.58011 7.78 9.3501 8.44 9.3501H8.91C9.56 9.3501 9.85001 9.58011 9.85001 10.2401V14.8201C9.85001 15.4701 9.57 15.7101 8.91 15.7101H8.44C7.78 15.7101 7.5 15.4801 7.5 14.8201Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="flex-1 ml-3 whitespace-nowrap">Add review</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/my-bookings' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 2V5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.5 9.08997H20.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.44 19L17.43 19.99L19.56 18.02" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9955 13.7H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.29431 13.7H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.29431 16.7H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className="flex-1 ml-3 whitespace-nowrap">My Bookings</span>
                                </NavLink>
                            </li>
        </>
    );
};

export default Dashboard_User;