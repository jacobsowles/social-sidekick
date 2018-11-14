import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import AuthService from '@api/auth-service';
import history from '@api/history';
import Landing from '@components/Landing';
import Home from '@components/Home';
import Callback from '@components/Callback';
import MainNav from '@components/MainNav';
import PrivateRoute from '@components/PrivateRoute';
import './App.scss';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <MainNav
            isAuthenticated={authService.isAuthenticated()}
            onLogin={authService.login}
            onLogout={this.handleLogout}
          />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  authService.isAuthenticated() ? <Redirect to="/home" /> : <Landing />
                }
              />
              <PrivateRoute
                path="/home"
                component={Home}
                isAuthenticated={authService.isAuthenticated()}
                login={authService.login}
              />
              <Route
                path="/callback"
                render={props => {
                  handleAuthentication(props);
                  return <Callback {...props} />;
                }}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }

  handleLogout = () => {
    authService.logout();
    this.forceUpdate();
  };
}

const authService = new AuthService();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    authService.handleAuthentication();
  }
};

export default App;
