import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  //const authData = useAuth();
  //console.log(authData);

  
    const user = localStorage.getItem("user");
    if(!user){
        return <Navigate to="/" />;
    }    

//   if (!authData.user) {
//     // user is not authenticated
//     return <Navigate to="/" />;
//   }
  return children;
};