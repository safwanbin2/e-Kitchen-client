import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Details from "../pages/Details";
import AllServices from "../pages/Home/AllServices";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'services-all',
                loader: () => fetch(`http://localhost:5000/services?limit=${0}`),
                element: <AllServices></AllServices>
            },
            {
                path: "/services/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Details></Details>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);



export default router;