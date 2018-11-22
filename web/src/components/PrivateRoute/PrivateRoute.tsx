import * as React from 'react';
import { Route } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.Component | ((...args: any[]) => any);
  isAuthenticated: boolean;
  login: (...args: any[]) => any;
};

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
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
