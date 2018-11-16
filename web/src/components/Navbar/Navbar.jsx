import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav as BootstrapNav,
  Navbar as BootstrapNavbar,
  NavItem as BootstrapNavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

const Navbar = ({ isAuthenticated, onLogin, onLogout }) => {
  const navbarRight = isAuthenticated ? (
    <BootstrapNav pullRight>
      <LinkContainer to="/home">
        <BootstrapNavItem>Home</BootstrapNavItem>
      </LinkContainer>
      <BootstrapNavItem onClick={onLogout}>Log Out</BootstrapNavItem>
    </BootstrapNav>
  ) : (
    <BootstrapNav pullRight>
      <BootstrapNavItem onClick={onLogin}>Log In</BootstrapNavItem>
    </BootstrapNav>
  );

  return (
    <BootstrapNavbar>
      <BootstrapNavbar.Header>
        <BootstrapNavbar.Brand>
          <a href="/">
            <FontAwesomeIcon icon="cube" />
            Project Name
          </a>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
      </BootstrapNavbar.Header>
      <BootstrapNavbar.Collapse>
        <BootstrapNav>
          <LinkContainer to="/contact">
            <BootstrapNavItem>Contact</BootstrapNavItem>
          </LinkContainer>
        </BootstrapNav>
        {navbarRight}
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Navbar;
