import React from 'react';
import { Navigate } from 'react-router-dom';
 
const LoggedInRouteGuard = ({ children }) => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
      
       return flag
   }
 
    if (hasJWT())
    {
        alert("You're already registered and logged in!");
        return <Navigate to="/" />;
    }

    return children;
};
 
export default LoggedInRouteGuard;