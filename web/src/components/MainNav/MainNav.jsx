import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
        <Navbar.Collapse>{this.getNav()}</Navbar.Collapse>
      </Navbar>
    );
  }

  getNav() {
    return this.props.isAuthenticated ? (
      <Nav pullRight>
        <LinkContainer to="/home">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <NavItem onClick={this.props.onLogout}>Log Out</NavItem>
      </Nav>
    ) : (
      <Nav pullRight>
        <NavItem onClick={this.props.onLogin}>Log In</NavItem>
      </Nav>
    );
  }
}

export default MainNav;
