import React from 'react';
import { Route } from 'react-router-dom';
import IPrivateRoute from './IPrivateRoute';

const PrivateRoute: React.FunctionComponent<IPrivateRoute> = ({
  component: Component,
  isAuthenticated,
  login,
  path,
  ...rest
}) => {
  return (
    <Route
      path={path}
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
