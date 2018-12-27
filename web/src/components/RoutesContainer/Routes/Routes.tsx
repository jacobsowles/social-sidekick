import React, { ComponentState, FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Auth0CallbackPage from '@pages/Auth0CallbackPage';
import Auth0PostAuthPage from '@pages/Auth0PostAuthPage';
import ConnectionsPage from '@pages/ConnectionsPage';
import ContactPage from '@pages/ContactPage';
import DashboardPage from '@pages/DashboardPage';
import LandingPage from '@pages/LandingPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';
import AuthService from '@core/auth';
import { UserService } from '@core/types';
import PrivateRoute from './PrivateRoute';
import './Routes.scss';

export interface RoutesProps {
  handleAuthentication: (nextState: ComponentState) => void;
  serviceModules: any[] | null;
  services: UserService[] | null;
  userId?: string;
}

const Routes: FunctionComponent<RoutesProps> = ({
  handleAuthentication,
  serviceModules,
  services,
  userId
}) => {
  const authService = new AuthService();

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            authService.isAuthenticated() ? <Redirect to="/dashboard" /> : <LandingPage />
          }
        />
        <Route
          path="/auth0-callback"
          render={props => (
            <Auth0CallbackPage handleAuthentication={handleAuthentication} {...props} />
          )}
        />
        <Route path="/auth0-postauth" component={Auth0PostAuthPage} />

        {authService.isAuthenticated && (
          <Route
            path="/connections"
            render={() => <ConnectionsPage services={services} userId={userId} />}
          />
        )}

        {!authService.isAuthenticated && (
          <Route
            path="/connections"
            render={() => {
              authService.login();
              return null;
            }}
          />
        )}

        <Route path="/contact" component={ContactPage} />

        {authService.isAuthenticated && (
          <Route
            path="/dashboard"
            render={() => (
              <DashboardPage serviceModules={serviceModules} services={services} userId={userId} />
            )}
          />
        )}

        {!authService.isAuthenticated && (
          <Route
            path="/dashboard"
            render={() => {
              authService.login();
              return null;
            }}
          />
        )}

        <PrivateRoute path="/oauth-callback" component={OAuthCallbackPage} />
      </Switch>
    </div>
  );
};

export default Routes;
