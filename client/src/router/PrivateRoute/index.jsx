import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const { isHomeAuth } = useSelector((state) => state.loginSlice);

  if (!isHomeAuth) {
    return <Navigate to="/" />;
  }

  return children;
};
