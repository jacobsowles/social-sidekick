import React, { FunctionComponent, ReactType } from 'react';
import { Route } from 'react-router-dom';

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
        if (authService.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          authService.login();
          return null;
        }
      }}
    />
  );
};

export default PrivateRoute;
