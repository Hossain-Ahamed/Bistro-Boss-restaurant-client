import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import PreventLogin from "../RouteBlocker/PreventLogin/PreventLogin";
import PrivateRoute from "../RouteBlocker/PrivateRoute/PrivateRoute";
import Profile from "../Pages/UserFunctions/Profile/Profile";

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
                path:'profile',
                element : <PrivateRoute><Profile/></PrivateRoute>
            }
        ]
    }
])