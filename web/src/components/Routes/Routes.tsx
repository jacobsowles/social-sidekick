import PropTypes from 'prop-types';
import React, { Component, ComponentState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Auth0CallbackPage from '@pages/Auth0CallbackPage';
import Auth0PostAuthPage from '@pages/Auth0PostAuthPage';
import ConnectionsPageContainer from '@pages/ConnectionsPageContainer';
import ContactPage from '@pages/ContactPage';
import HomePage from '@pages/HomePage';
import LandingPage from '@pages/LandingPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';
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
            path="/auth0-callback"
            render={props => (
              <Auth0CallbackPage handleAuthentication={this.handleAuthentication} {...props} />
            )}
          />
          <PrivateRoute path="/connections" component={ConnectionsPageContainer} />
          <Route path="/contact" component={ContactPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/oauth-callback" component={OAuthCallbackPage} />} />
          <Route path="/auth0-postauth" component={Auth0PostAuthPage} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
