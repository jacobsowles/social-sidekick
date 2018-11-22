import * as React from 'react';
import {
  Redirect,
  Route,
  Router as ReactRouter,
  Switch,
  RouteComponentProps
} from 'react-router-dom';
import AuthService from '@api/auth-service';
import history from '@api/history';
import Navbar from '@components/Navbar';
import PrivateRoute from '@components/PrivateRoute';
import LandingPage from '@components/LandingPage';
import HomePage from '@components/HomePage';
import ContactPage from '@components/ContactPage';
import CallbackPage from '@components/CallbackPage';
import './Router.scss';

class Router extends React.Component {
  render() {
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

  authService = new AuthService();

  handleLogout = (): void => {
    this.authService.logout();
    this.forceUpdate();
  };

  handleAuthentication = (nextState: RouteComponentProps): void => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.authService.handleAuthentication();
    }
  };
}

export default Router;
