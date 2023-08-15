import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";
import Menu from "../Component/Menu/Menu";
import Order from "../Component/Order/Order";
import LogIn from "../Component/LogIn/LogIn";
import SignUp from "../Component/SignUp/SignUp";


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
        }
      ]
    },
  ]);