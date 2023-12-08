import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
        setIsAuthenticated(true);
    }else {
        setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  if(isAuthenticated !== null){
    return isAuthenticated ? children : <Navigate to="/login" />
  }

};

export default ProtectedRoute;
