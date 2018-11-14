import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MainNav.scss';

const MainNav = ({ isAuthenticated, onLogin, onLogout }) => {
  const nav = isAuthenticated ? (
    <Nav pullRight>
      <LinkContainer to="/home">
        <NavItem>Home</NavItem>
      </LinkContainer>
      <NavItem onClick={onLogout}>Log Out</NavItem>
    </Nav>
  ) : (
    <Nav pullRight>
      <NavItem onClick={onLogin}>Log In</NavItem>
    </Nav>
  );

  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Project Title</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>{nav}</Navbar.Collapse>
    </Navbar>
  );
};

MainNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default MainNav;
