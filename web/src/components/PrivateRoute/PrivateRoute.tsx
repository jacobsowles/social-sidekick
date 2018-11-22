import * as React from 'react';
import { Route } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.Component | ((...args: any[]) => any);
  isAuthenticated: boolean;
  login: (...args: any[]) => any;
  path: string;
};

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
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
