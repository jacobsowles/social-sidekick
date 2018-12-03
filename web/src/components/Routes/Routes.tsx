import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ConnectionsPage from '@components/ConnectionsPage';
import ContactPage from '@components/ContactPage';
import HomePage from '@components/HomePage';
import LandingPage from '@components/LandingPage';
import Login from '@components/Login';
import AuthService from '@core/auth';
import PrivateRoute from './PrivateRoute';
import './Routes.scss';

interface RoutesProps {
  handleAuthCallback: (...args: any[]) => any;
}

const Routes: FunctionComponent<RoutesProps> = ({ handleAuthCallback }) => {
  const authService = new AuthService();

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (authService.isAuthenticated() ? <Redirect to="/home" /> : <LandingPage />)}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthCallback(props);
            return <Redirect to="/" />;
          }}
        />
        <Route path="/contact" component={ContactPage} />
        <PrivateRoute path="/connections" component={ConnectionsPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;
