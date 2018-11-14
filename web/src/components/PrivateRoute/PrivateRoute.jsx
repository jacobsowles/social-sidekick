import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, login, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          login();
          return null;
        }
      }}
    />
  );
};

export default PrivateRoute;
