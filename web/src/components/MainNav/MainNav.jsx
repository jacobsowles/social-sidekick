import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthService from '@api/auth-service';
import './MainNav.scss';

class MainNav extends Component {
  render() {
    return (
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
    );
  }
}

const authService = new AuthService();
const { isAuthenticated } = authService;

const login = () => {
  authService.login();
};

const logout = () => {
  authService.logout();
};

const MainNavWithRouter = withRouter(MainNav);

export default MainNavWithRouter;
