import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
//import {  } from '@fortawesome/free-regular-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthService from '@api/auth-service';
import history from '@api/history';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import PrivateRoute from '@components/PrivateRoute';
import LandingPage from '@components/LandingPage';
import HomePage from '@components/HomePage';
import CallbackPage from '@components/CallbackPage';
import './App.scss';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

library.add(faGithub, faCube);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar
              isAuthenticated={authService.isAuthenticated()}
              onLogin={authService.login}
              onLogout={this.handleLogout}
            />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() =>
                    authService.isAuthenticated() ? <Redirect to="/home" /> : <LandingPage />
                  }
                />
                <PrivateRoute
                  path="/home"
                  component={HomePage}
                  isAuthenticated={authService.isAuthenticated()}
                  login={authService.login}
                />
                <Route
                  path="/callback"
                  render={props => {
                    handleAuthentication(props);
                    return <CallbackPage {...props} />;
                  }}
                />
              </Switch>
            </div>
          </div>
        </Router>
        <Footer>
          <Footer.Content>&copy; Project Name 2018</Footer.Content>
          <Footer.Content pullRight>
            <a href="http://github.com">
              <FontAwesomeIcon icon={faGithub} title="This project on GitHub" />
              This project on GitHub
            </a>
          </Footer.Content>
        </Footer>
      </div>
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
