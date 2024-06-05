import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import DashboardLayout from "../layouts/DashboardLayout";
import WriteReview from "../pages/WriteReview";
import UpdateReview from "../pages/UpdateReview";
import Posts from "../pages/Posts";
import ReadPost from "../pages/ReadPost";
import SecureRoute from "./private/SecureRoute";
import Faq from "../pages/Faq";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "read/:id",
        element: <ReadPost />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASEURL}/post/${params.id}`),
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <SecureRoute>
        <DashboardLayout />
      </SecureRoute>
    ),
    children: [
      {
        path: "",
        element: <Posts />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "update",
        element: <UpdateProfile />,
      },
      {
        path: "write",
        element: <WriteReview />,
      },
      {
        path: "editreview/:id",
        element: <UpdateReview />,
      },
    ],
  },
]);

export default router;
