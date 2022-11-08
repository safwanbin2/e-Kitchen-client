import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Details from "../pages/Details";
import AllServices from "../pages/Home/AllServices";
import Home from "../pages/Home/Home";

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
            }
        ]
    }
]);



export default router;