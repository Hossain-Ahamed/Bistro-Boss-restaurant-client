import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import PreventLogin from "../RouteBlocker/PreventLogin/PreventLogin";
import PrivateRoute from "../RouteBlocker/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AdminPages/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AdminPages/AddItems/AddItems";
import AdminRoute from "../RouteBlocker/AdminRoute/AdminRoute";
import ManageItems from "../Pages/Dashboard/AdminPages/ManageItems/ManageItems";
import MyCart from "../Pages/Dashboard/UserPages/MyCart/MyCart";
import UserHome from "../Pages/Dashboard/UserPages/UserHome/UserHome";
import Payment from "../Pages/Dashboard/UserPages/Payment/Payment";
import AdminHome from "../Pages/Dashboard/AdminPages/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order',
                element: <Order />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <PreventLogin><Login /></PreventLogin>
            },
            {
                path: 'sign-up',
                element: <PreventLogin><SignUp /></PreventLogin>
            },
            {
                path: 'profile',
                element: <PrivateRoute><UserHome /></PrivateRoute>
            }
        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: 'my-cart',
                element: <MyCart />
            },
            {
                path: 'user-home',
                element: <UserHome />
            },
            {
                path: 'payment',
                element: <Payment />
            },

            // admin 
            {
                path: 'admin-home',
                element:  <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'users',
                element:  <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path : 'add-items',
                element: <AdminRoute><AddItems/></AdminRoute>
            },
            {
                path : 'manage-items',
                element: <AdminRoute><ManageItems/></AdminRoute>

            }
        ]

    }
])