import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import BaseLayout from "../layout/BaseLayout";
import Login from "../pages/Login";
import EntryRouter from "../components/EntryRouter";
import Signin from "../pages/Signin";
import Home from "../pages/Home";

export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  _AUTH: '/auth',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup'
};

const routes = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <EntryRouter />,
    children: [
      {
        path: ROUTES.PROFILE,
        element: <BaseLayout />,
        children: [
          {}, // user
          {}, // post
          {} // create post
        ]
      },
      {
        path: ROUTES._AUTH,
        element: <AuthLayout />,
        children: [
          {
            index: true,
            path: 'login',
            element: <Login />
          }, // login
          {
            path: 'signup',
            element: <Signin />
          } // register
        ]
      },
      {
        index: true,
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Home/>,
            children: []
          }
        ]
      },
    ],
  },
]);
export default routes;