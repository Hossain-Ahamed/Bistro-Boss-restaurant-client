import React from 'react';
import { Outlet } from 'react-router-dom';
import ToasterProvider from '../../components/Toaster/ToasterProvider';
import Dashboard_Common from './Dashboard_Common';
import Dashboard_User from './Dashboard_User';
import Dashboard_Admin from './Dashboard_Admin';

const Dashboard = () => {


    // TODO : load datafrom the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <>
            <main className='bg-slate-100 h-fit'>

                <label htmlFor='drawer' aria-controls="default-sidebar" type="button" className=" inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </label>
                <input id="drawer" type="checkbox" defaultChecked className='peer/drawer hidden' />
                <aside id="default-sidebar" className="fixed md:block top-0 left-0 z-40 w-64 h-screen transition-transform peer-checked/drawer:-translate-x-full peer-checked/drawer:sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">


                        <label type="button" htmlFor='drawer' className="md:hidden absolute  top-5 right-1 rounded-md p-2 inline-flex items-center justify-center text-white bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>

                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>



                        <ul className="space-y-2 font-medium">

                            {
                                isAdmin ?
                                    <Dashboard_Admin />
                                    :
                                    <Dashboard_User />
                            }

                            <div className='divider'></div>

                            <Dashboard_Common />
                        </ul>
                    </div>
                </aside>

                <div className="p-4 sm:ml-64  ">
                    <Outlet />
                </div>
            </main>
            <ToasterProvider />
        </>
    );
};

export default Dashboard;