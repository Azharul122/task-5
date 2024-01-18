import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import AllUser from "./Components/Admin/AllUser.jsx";
import UserLogin from "./Components/User/UserLogin.jsx";
import UpdateUserInfo from "./Components/User/UpdateUserInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/update-user",
    element: <UpdateUserInfo />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "/all-user",
    element: <AllUser></AllUser>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
