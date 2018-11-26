import React from 'react';
import { init, shallow, shallowTopLevelElement } from '@tests/test-base';
import { Nav as BootstrapNav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import INavbar from './INavbar';
import Navbar from './Navbar';

describe('Navbar', () => {
  let props: INavbar;

  init(() => <Navbar {...props} />, BootstrapNavbar);

  const loginLink = () => shallow().findWhere(component => component.props().children === 'Log In');
  const logoutLink = () =>
    shallow().findWhere(component => component.props().children === 'Log Out');

  beforeEach(() => {
    props = {
      className: undefined,
      isAuthenticated: true,
      onLogin: jest.fn(),
      onLogout: jest.fn()
    };
  });

  it('should always render a BootstrapNavbar component', () => {
    shallow()
      .find(BootstrapNavbar)
      .should.have.lengthOf(1);
  });

  it('should always render a BootstrapNavbar.Header component', () => {
    shallow()
      .find(BootstrapNavbar.Header)
      .should.have.lengthOf(1);
  });

  it('should always render a BootstrapNavbar.Brand component', () => {
    shallow()
      .find(BootstrapNavbar.Brand)
      .should.have.lengthOf(1);
  });

  it('should always render a BootstrapNavbar.Toggle component', () => {
    shallow()
      .find(BootstrapNavbar.Toggle)
      .should.have.lengthOf(1);
  });

  it('should always render a BootstrapNavbar.Collapse component', () => {
    shallow()
      .find(BootstrapNavbar.Collapse)
      .should.have.lengthOf(1);
  });

  it('should always render a FontAwesomeIcon component', () => {
    shallow()
      .find(FontAwesomeIcon)
      .should.have.lengthOf(1);
  });

  it('should always render a BootstrapNav component with the `pullLeft` set to true', () => {
    shallow()
      .find(BootstrapNav)
      .findWhere(nav => nav.prop('className') === 'nav-left')
      .should.have.lengthOf(1);
  });

  it('should always render a BootstrapNav component with the `pullRight` set to true', () => {
    shallow()
      .find(BootstrapNav)
      .findWhere(nav => nav.props().pullRight)
      .should.have.lengthOf(1);
  });

  describe('when `isAuthenticated` is true', () => {
    beforeEach(() => {
      props.isAuthenticated = true;
    });

    it('should render a link to the contact page', () => {
      shallow()
        .findWhere(component => component.props().to === '/contact')
        .should.have.lengthOf(1);
    });

    it('should render a link to the home page', () => {
      shallow()
        .findWhere(component => component.props().to === '/home')
        .should.have.lengthOf(1);
    });

    it('should render a link to the connections page', () => {
      shallow()
        .findWhere(component => component.props().to === '/connections')
        .should.have.lengthOf(1);
    });

    it('should render a log out link', () => {
      logoutLink().should.have.lengthOf(1);
    });

    it('should not render a log in link', () => {
      loginLink().should.have.lengthOf(0);
    });
  });

  describe('when `isAuthenticated` is false', () => {
    beforeEach(() => {
      props.isAuthenticated = false;
    });

    it('should render a link to the contact page', () => {
      shallow()
        .findWhere(component => component.props().to === '/contact')
        .should.have.lengthOf(1);
    });

    it('should not render a link to the home page', () => {
      shallow()
        .findWhere(component => component.props().to === '/home')
        .should.have.lengthOf(0);
    });

    it('should render a log in link', () => {
      loginLink().should.have.lengthOf(1);
    });

    it('should not render a log out link', () => {
      logoutLink().should.have.lengthOf(0);
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should include the specified class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('another-class');
    });

    it('should include the navbar class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('navbar');
    });
  });

  describe('when `className` is not defined', () => {
    it('should only include the default class names', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.equal('navbar');
    });
  });

  describe('when the log in link is clicked', () => {
    beforeEach(() => {
      props.isAuthenticated = false;
      loginLink().simulate('click');
    });

    it('should call the `onLogin` function', () => {
      expect(props.onLogin).toHaveBeenCalled();
    });
  });

  describe('when the log out link is clicked', () => {
    beforeEach(() => {
      props.isAuthenticated = true;
      logoutLink().simulate('click');
    });

    it('should call the `onLogout` function', () => {
      expect(props.onLogout).toHaveBeenCalled();
    });
  });
});
