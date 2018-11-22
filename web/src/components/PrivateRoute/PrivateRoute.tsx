import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

type PrivateRouteProps = {
  component: JSX.Element | ((...args: any[]) => any);
  isAuthenticated: boolean;
  login: (...args: any[]) => any;
};

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  login,
  ...rest
}) => {
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
