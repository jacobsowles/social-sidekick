import * as React from 'react';
import classNames from 'classnames';
import {
  Nav as BootstrapNav,
  Navbar as BootstrapNavbar,
  NavItem as BootstrapNavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

type NavbarProps = {
  className?: string;
  isAuthenticated: boolean;
  onLogin: (...args: any[]) => any;
  onLogout: (...args: any[]) => any;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  isAuthenticated,
  onLogin,
  onLogout,
  ...rest
}) => {
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
          <LinkContainer to="/contact">
            <BootstrapNavItem>Contact</BootstrapNavItem>
          </LinkContainer>
        </BootstrapNav>
        <BootstrapNav pullRight>
          {isAuthenticated ? (
            <>
              <LinkContainer to="/home">
                <BootstrapNavItem>Home</BootstrapNavItem>
              </LinkContainer>
              <BootstrapNavItem onClick={onLogout}>Log Out</BootstrapNavItem>
            </>
          ) : (
            <BootstrapNavItem onClick={onLogin}>Log In</BootstrapNavItem>
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
