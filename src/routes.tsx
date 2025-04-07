import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signIn";
import AppLayout from "./pages/_layouts/app";
import AuthLayout from "./pages/_layouts/auth";
import SignUp from "./pages/signUp";
import Orders from "./pages/orders";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
