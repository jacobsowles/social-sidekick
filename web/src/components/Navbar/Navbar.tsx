import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classNames from 'classnames';
import {
  Nav as BootstrapNav,
  Navbar as BootstrapNavbar,
  NavItem as BootstrapNavItem
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import AuthService from '@core/auth';
import './Navbar.scss';

export interface NavbarProps {
  className?: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ className, ...rest }) => {
  const authService = new AuthService();

  debugger;
  return (
    <BootstrapNavbar className={classNames('navbar', className)} {...rest}>
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
        <BootstrapNav className="nav-left">
          <Link to="/contact">Contact</Link>
        </BootstrapNav>
        <BootstrapNav pullRight>
          {authService.isAuthenticated() ? (
            <>
              <LinkContainer to="/home">
                <BootstrapNavItem>Home</BootstrapNavItem>
              </LinkContainer>
              <LinkContainer to="/connections">
                <BootstrapNavItem>Connections</BootstrapNavItem>
              </LinkContainer>
              <LinkContainer to="/logout">
                <BootstrapNavItem>Log Out</BootstrapNavItem>
              </LinkContainer>
            </>
          ) : (
            <LinkContainer to="/login">
              <BootstrapNavItem>Log In</BootstrapNavItem>
            </LinkContainer>
          )}
        </BootstrapNav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

Navbar.defaultProps = {
  className: undefined
};

export default Navbar;
