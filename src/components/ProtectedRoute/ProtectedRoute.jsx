import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  // const isLoggedIn = localStorage.getItem("loggedIn");
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/signin" replace></Navigate>;
};

export default ProtectedRoute;
