import React, { FunctionComponent, ReactType } from 'react';
import { Route } from 'react-router-dom';

import AuthService from '@core/auth';

export interface PrivateRouteProps {
  auth?: AuthService;
  component: ReactType;
  path: string;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  auth,
  component: Component,
  path,
  ...rest
}) => {
  const authService: AuthService = auth || new AuthService();

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
