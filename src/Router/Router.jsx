import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";
import Menu from "../Component/Menu/Menu";
import Order from "../Component/Order/Order";
import LogIn from "../Component/LogIn/LogIn";
import SignUp from "../Component/SignUp/SignUp";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Secret from "../Component/secret/secret";
import Dashbord from "../LayOut/Dashbord";
import MyCart from "../Component/MyCart/MyCart";
import AllUser from "../LayOut/AllUser/AllUser";
import AddItem from "../Component/AddItem/AddItem";
import ManageItem from "../Component/ManageItem/ManageItem";
import Pay from "../Component/Payment/Pay";
import UserHome from "../Component/UserHome/UserHome";
import AdminHome from "../Component/AdminHome/AdminHome";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: "/order",
            element: <Order></Order>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/secret",
            element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
        }
      ]
    },
    {
        path:"/dashbord",
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children:[
           {
            path:"my-cart",
            element:<MyCart></MyCart>
           },
           {
            path:"alluser",
            element:<AllUser></AllUser>
           },
           {
            path:"additem",
            element:<AddItem></AddItem>
           },
           {
            path:"manageitem",
            element:<ManageItem></ManageItem>
           },
           {
            path:"my-cart/pay",
            element:<Pay></Pay>
           },
           {
            path:"user-home",
            element:<UserHome></UserHome>
           },
           {
            path:"admin-home",
            element:<AdminHome></AdminHome>
           }
        ]
    }
  ]);