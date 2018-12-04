import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MenuItem, Nav, Navbar as BootstrapNavbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AuthService from '@core/auth';
import './Navbar.scss';

interface NavbarProps {
  className?: string;
  username?: string;
  picture?: string;
}

class Navbar extends Component<NavbarProps> {
  public static contextTypes = {
    router: PropTypes.object
  };

  public static defaultProps = {
    className: '',
    picture: '',
    username: ''
  };

  private authService = new AuthService();

  public logout = () => {
    this.authService.logout((location: string) => this.context.router.history.replace(location));
  };

  public render() {
    return (
      <BootstrapNavbar className={classNames('navbar', this.props.className)}>
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
          <Nav className="nav-left">
            <LinkContainer to="/contact">
              <NavItem>Contact</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            {this.authService.isAuthenticated() ? (
              <>
                <LinkContainer to="/home">
                  <NavItem>Home</NavItem>
                </LinkContainer>
                <NavDropdown
                  eventKey={1}
                  id="user-dropdown"
                  title={
                    <span className="profile-thumbnail">
                      <img src={this.props.picture} alt="thumbnail" />
                    </span>
                  }
                >
                  <MenuItem header>Logged in as {this.props.username}</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={1.1} onClick={this.logout}>
                    <FontAwesomeIcon icon={['fas', 'sign-out-alt']} /> Log Out
                  </MenuItem>
                </NavDropdown>
              </>
            ) : (
              <NavItem onClick={this.authService.login}>Log In</NavItem>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
