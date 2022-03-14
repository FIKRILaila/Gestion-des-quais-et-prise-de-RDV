import { useRoutes } from "react-router-dom";
import { Home, Login,Register, NotFound,Dashboard} from "../pages";
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
const Routers =  () =>useRoutes([
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ],
  },
  {
    path: "*",
    element:(<NotFound/>)
  },
])
export default Routers