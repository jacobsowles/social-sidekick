import PropTypes from 'prop-types';
import React, { Component, ComponentState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import CallbackPage from '@components/CallbackPage';
import ConnectionsPage from '@components/ConnectionsPage';
import ContactPage from '@components/ContactPage';
import HomePage from '@components/HomePage';
import LandingPage from '@components/LandingPage';
import PostAuthPage from '@components/PostAuthPage';
import AuthService from '@core/auth';
import PrivateRoute from './PrivateRoute';
import './Routes.scss';

class Routes extends Component {
  public static contextTypes = {
    router: PropTypes.object
  };

  private authService = new AuthService();

  public handleAuthentication = (nextState: ComponentState) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.authService.handleAuthentication((location: string) =>
        this.context.router.history.replace(location)
      );
    }
  };

  public render() {
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.authService.isAuthenticated() ? <Redirect to="/home" /> : <LandingPage />
            }
          />
          <Route
            path="/callback"
            render={props => {
              this.handleAuthentication(props);
              return <CallbackPage />;
            }}
          />
          <PrivateRoute path="/connections" component={ConnectionsPage} />
          <Route path="/contact" component={ContactPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <Route path="/postauth" component={PostAuthPage} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
