import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {

    const user = localStorage.getItem("user");

    if(user){
        return children;
    }else{
        return <Navigate to="/" />
    }
}

export default PrivateRoute;
