import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import AuthService from '@api/auth-service';
import history from '@api/history';
import Landing from '@components/Landing/Landing';
import Home from '@components/Home/Home';
import Callback from '@components/Callback/Callback';
import MainNav from '@components/MainNav/MainNav';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <MainNav />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (isAuthenticated() ? <Redirect to="/home" /> : <Landing />)}
              />
              <PrivateRoute path="/home" component={Home} />
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
}

const authService = new AuthService();
const { isAuthenticated } = authService;

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated() ? <Component {...props} /> : authService.login())}
    />
  );
}

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    authService.handleAuthentication();
  }
};

export default App;
