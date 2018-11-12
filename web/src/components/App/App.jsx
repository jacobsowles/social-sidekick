import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';
import Callback from '../Callback/Callback';
import Auth from '../../../../api/src/Auth/Auth';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Project Title</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {!isAuthenticated() && <NavItem onClick={() => login()}>Log In</NavItem>}
              {isAuthenticated() && (
                <LinkContainer to="/home">
                  <NavItem>Home</NavItem>
                </LinkContainer>
              )}
              {isAuthenticated() && <NavItem onClick={() => logout()}>Log Out</NavItem>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (isAuthenticated() ? <Redirect to="/home" /> : <Landing />)}
            />
            <PrivateRoute path="/home" component={Home} />
            <Route path="/logout" render={() => <Redirect to="/" />} />
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
    );
  }
}

const auth = new Auth();
const { isAuthenticated } = auth;

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated() ? <Component {...props} /> : auth.login())}
    />
  );
}

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const login = () => {
  auth.login();
};

const logout = () => {
  auth.logout();
};

export default withRouter(App);
