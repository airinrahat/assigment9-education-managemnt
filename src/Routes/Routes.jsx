/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import ServiceDetails from "../Component/Service/ServiceDetails/ServiceDetails";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import Singup from "../Pages/LoginSingup/Singup";
import Login from "../Pages/LoginSingup/Login";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Course from "../Pages/Course/Course";
import Events from "../Pages/Events/Events";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/public/services.json"),
              },
              {
                path:"/services",
                element:<Services></Services>,
                loader: () => fetch('/public/services.json')
              }, 
              {
                path: "/blog",
                element: <Blog></Blog>,
              }, 
              {
                path:"/course",
                element:<PrivateRoute>
                  <Course></Course>
                </PrivateRoute>
              },
              {
                path:"/events",
                // element:<Events></Events>,
                element:<PrivateRoute>
                  <Events></Events>
                </PrivateRoute>,
                loader: () => fetch('/public/event.json')
              },
               {
                path: "/login",
                element: <Login></Login>
              },
               {
                path: "/singup",
                element: <Singup></Singup>,
              },
              {
                path: "/service/:id",
                element:
                <PrivateRoute>
                  <ServiceDetails></ServiceDetails>
                </PrivateRoute>, 
                loader: () => fetch("/public/services.json"),
              },
        ]
    }
]);
export default routes;