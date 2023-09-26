import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard_Admin = () => {
    return (
        <>
            <>
                <li>
                    <NavLink to='/dashboard/admin-home' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 9V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 13.5H16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className="ml-3">Admin Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/add-items' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 10.6499H9.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 8.20996V13.21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        <span className="flex-1 ml-3 whitespace-nowrap">Add Items</span>
                        {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ">Pro</span> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/manage-items' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 2V22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 8.5H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 15.5H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className="flex-1 ml-3 whitespace-nowrap">Manage Items</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/dashboard/manage-bookings' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9702 22H4.97021C1.97021 22 1.97021 20.65 1.97021 19V18C1.97021 17.45 2.42021 17 2.97021 17H20.9702C21.5202 17 21.9702 17.45 21.9702 18V19C21.9702 20.65 21.9702 22 18.9702 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.72 13V17H3.27002V13C3.27002 9.16 5.98002 5.95 9.59002 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 11H9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        <span className="flex-1 ml-3 whitespace-nowrap">Manage Bookings</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/users' className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z" fill="#292D32" />
                            <path d="M20.7901 14.7C19.6701 15.45 18.1001 15.73 16.6501 15.54C17.0301 14.72 17.2301 13.81 17.2401 12.85C17.2401 11.85 17.0201 10.9 16.6001 10.07C18.0801 9.86998 19.6501 10.15 20.7801 10.9C22.3601 11.94 22.3601 13.65 20.7901 14.7Z" fill="#292D32" />
                            <path d="M6.43991 7.77C6.50991 7.76 6.57991 7.76 6.64991 7.77C8.19991 7.72 9.42991 6.45 9.42991 4.89C9.42991 3.29 8.13991 2 6.53991 2C4.94991 2 3.65991 3.29 3.65991 4.89C3.65991 6.45 4.88991 7.72 6.43991 7.77Z" fill="#292D32" />
                            <path d="M6.55012 12.85C6.55012 13.82 6.76012 14.74 7.14012 15.57C5.73012 15.72 4.26012 15.42 3.18012 14.71C1.60012 13.66 1.60012 11.95 3.18012 10.9C4.25012 10.18 5.76012 9.88998 7.18012 10.05C6.77012 10.89 6.55012 11.84 6.55012 12.85Z" fill="#292D32" />
                            <path d="M12.12 15.87C12.04 15.86 11.95 15.86 11.86 15.87C10.02 15.81 8.55005 14.3 8.55005 12.44C8.56005 10.54 10.09 9 12 9C13.9 9 15.44 10.54 15.44 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z" fill="#292D32" />
                            <path d="M8.87005 17.94C7.36005 18.95 7.36005 20.61 8.87005 21.61C10.59 22.76 13.41 22.76 15.13 21.61C16.64 20.6 16.64 18.94 15.13 17.94C13.42 16.79 10.6 16.79 8.87005 17.94Z" fill="#292D32" />
                        </svg>

                        <span className="flex-1 ml-3 whitespace-nowrap">All Users</span>
                    </NavLink>
                </li>


            </>
        </>
    );
};

export default Dashboard_Admin;