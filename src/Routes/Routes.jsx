import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/shared/Navbar/Home/Home/Home";
import Receipies from "../Pages/shared/Navbar/Home/Receipies/Receipies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    ]
  },
]);

export default router;