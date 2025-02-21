import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;

  // return (
  //   <Route
  //     {...rest}
  //     element={isAuthenticated ? element : <Navigate to="/" />} 
  //   />
  // );
};

export default ProtectedRoute;
