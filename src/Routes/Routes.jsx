import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/shared/Navbar/Home/Home/Home";
import Receipies from "../Pages/shared/Navbar/Home/Receipies/Receipies";
import Login from "../Pages/shared/Navbar/Home/Login/Login";
import Register from "../Pages/shared/Navbar/Home/Login/Register";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ({ params }) => fetch('http://localhost:5000/chefs')

      },
      {
        path: '/blog',
        element: <div>blog</div>
      },
      {
        path: '/recipies/:id',
        element: <Receipies></Receipies>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
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