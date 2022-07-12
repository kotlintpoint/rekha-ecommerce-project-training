import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";


export const ProtectedRoute = ({ children }) => {
  const authData = useAuth();
  console.log('authData',authData);

  /*if (!authData.user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }*/
  return children;
}