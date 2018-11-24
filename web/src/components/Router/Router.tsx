import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Router as ReactRouter,
  Switch
} from 'react-router-dom';
import AuthService from '@api/AuthService';
import history from '@api/History';
import CallbackPage from '@components/CallbackPage';
import ContactPage from '@components/ContactPage';
import HomePage from '@components/HomePage';
import LandingPage from '@components/LandingPage';
import Navbar from '@components/Navbar';
import PrivateRoute from '@components/PrivateRoute';

import './Router.scss';

class Router extends React.Component {
  private authService = new AuthService();

  public render() {
    return (
      <ReactRouter history={history}>
        <>
          <Navbar
            isAuthenticated={this.authService.isAuthenticated()}
            onLogin={this.authService.login}
            onLogout={this.handleLogout}
          />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  this.authService.isAuthenticated() ? <Redirect to="/home" /> : <LandingPage />
                }
              />
              <PrivateRoute
                path="/home"
                component={HomePage}
                isAuthenticated={this.authService.isAuthenticated()}
                login={this.authService.login}
              />
              <Route path="/contact" component={ContactPage} />
              <Route
                path="/callback"
                render={props => {
                  this.handleAuthentication(props);
                  return <CallbackPage {...props} />;
                }}
              />
            </Switch>
          </div>
        </>
      </ReactRouter>
    );
  }

  private handleLogout = (): void => {
    this.authService.logout();
    this.forceUpdate();
  };

  private handleAuthentication = (nextState: RouteComponentProps): void => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.authService.handleAuthentication();
    }
  };
}

export default Router;
