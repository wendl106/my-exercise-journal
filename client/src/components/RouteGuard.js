import React from 'react';
import { Navigate } from 'react-router-dom';
 
const RouteGuard = ({ children }) => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
      
       return flag
   }
 
    if (!hasJWT())
    {
        alert("This feature is only available to registered users!");
        return <Navigate to="/login" />;
    }

    return children;
};
 
export default RouteGuard;