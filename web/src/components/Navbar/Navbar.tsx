import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { MenuItem, Nav, Navbar as BootstrapNavbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AuthService from '@core/auth';
import './Navbar.scss';

class Navbar extends Component<any> {
  public static contextTypes = {
    router: PropTypes.object
  };

  public static defaultProps = {
    className: ''
  };

  private authService = new AuthService();

  public logout = () => {
    this.authService.logout((location: string) => this.context.router.history.replace(location));
  };

  public render() {
    return (
      <BootstrapNavbar className={classNames('navbar', this.props.className)} {...this.props.rest}>
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
                      <img src="http://honesttopaws.com/wp-content/uploads/sites/5/2017/05/banana-cat-1.png" />
                    </span>
                  }
                >
                  <MenuItem eventKey={1.1} onClick={this.logout}>
                    <FontAwesomeIcon icon={['fas', 'sign-out-alt']} /> Logout
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
