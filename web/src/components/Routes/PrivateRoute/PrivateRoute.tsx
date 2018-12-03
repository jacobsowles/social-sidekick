import React, { FunctionComponent, ReactType } from 'react';
import { Route } from 'react-router-dom';

import Login from '@components/Login';
import AuthService from '@core/auth';

export interface PrivateRouteProps {
  component: ReactType;
  path: string;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  path,
  ...rest
}) => {
  const authService: AuthService = new AuthService();

  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return authService.isAuthenticated() ? <Component {...props} /> : <Login />;
      }}
    />
  );
};

export default PrivateRoute;
