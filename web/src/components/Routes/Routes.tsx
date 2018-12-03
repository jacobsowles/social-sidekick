import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ContactPage from '@components/ContactPage';
import HomePage from '@components/HomePage';
import LandingPage from '@components/LandingPage';
import AuthService from '@core/auth';
import PrivateRoute from './PrivateRoute';
import './Routes.scss';

const Routes: FunctionComponent<any> = () => {
  const authService = new AuthService();

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (authService.isAuthenticated() ? <Redirect to="/home" /> : <LandingPage />)}
        />
        <Route path="/contact" component={ContactPage} />
        <PrivateRoute path="/home" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Routes;
