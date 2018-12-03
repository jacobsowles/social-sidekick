import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Nav as BootstrapNav,
  Navbar as BootstrapNavbar,
  NavItem as BootstrapNavItem
} from 'react-bootstrap';
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
          <BootstrapNav className="nav-left">
            <LinkContainer to="/contact">
              <BootstrapNavItem>Contact</BootstrapNavItem>
            </LinkContainer>
          </BootstrapNav>
          <BootstrapNav pullRight>
            {this.authService.isAuthenticated() ? (
              <>
                <LinkContainer to="/home">
                  <BootstrapNavItem>Home</BootstrapNavItem>
                </LinkContainer>
                <BootstrapNavItem onClick={this.logout}>Log Out</BootstrapNavItem>
              </>
            ) : (
              <BootstrapNavItem onClick={this.authService.login}>Log In</BootstrapNavItem>
            )}
          </BootstrapNav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
