import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/shared/Navbar/Home/Home/Home";
import Receipies from "../Pages/shared/Navbar/Home/Receipies/Receipies";
import Login from "../Pages/shared/Navbar/Home/Login/Login";
import Register from "../Pages/shared/Navbar/Home/Login/Register";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Pages/shared/Navbar/Home/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ({ params }) => fetch('https://assignment-10-server-saki4555.vercel.app/chefs')

      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/recipies/:id',
        element: <PrivateRoutes><Receipies></Receipies></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://assignment-10-server-saki4555.vercel.app/chefs/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router;