import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './App.scss';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

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
              <NavItem onClick={this.goTo.bind(this, 'home')}>Home</NavItem>
              {!isAuthenticated() && <NavItem onClick={this.login.bind(this)}>Log In</NavItem>}
              {isAuthenticated() && <NavItem onClick={this.logout.bind(this)}>Log Out</NavItem>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
