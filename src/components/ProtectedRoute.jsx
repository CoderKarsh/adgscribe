import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If no user, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If user exists, render the child component (Dashboard)
  return children;
};

export default ProtectedRoute;
