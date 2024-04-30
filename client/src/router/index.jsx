import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/Users";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
]);
