import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { MenuItem, Nav, Navbar as BootstrapNavbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AuthService from '@core/auth';
import './Navbar.scss';

export interface NavbarProps {
  className?: string;
  handleLogout: () => void;
  picture?: string;
  username?: string;
}

class Navbar extends PureComponent<NavbarProps> {
  public static contextTypes = {
    router: PropTypes.object
  };

  public static defaultProps = {
    className: undefined as string,
    picture: undefined as string,
    username: undefined as string
  };

  private authService = new AuthService();

  public logout = () => {
    this.authService.logout((location: string) => this.context.router.history.replace(location));
    this.props.handleLogout();
  };

  public render() {
    return (
      <BootstrapNavbar className={classNames('navbar', this.props.className)}>
        <BootstrapNavbar.Header>
          <BootstrapNavbar.Brand>
            <a href="/">
              <FontAwesomeIcon icon="cube" />
              Social Sidekick
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
                <LinkContainer to="/dashboard">
                  <NavItem>Dashboard</NavItem>
                </LinkContainer>
                <LinkContainer to="/connections">
                  <NavItem>Connections</NavItem>
                </LinkContainer>
                <NavDropdown
                  eventKey={1}
                  id="user-dropdown"
                  title={
                    <span className="profile-thumbnail">
                      <img
                        src={this.props.picture || 'thumbnail-placeholder.gif'}
                        alt="thumbnail"
                      />
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
