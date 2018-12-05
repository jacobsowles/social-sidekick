import React from 'react';
import { init, shallow } from '@tests/component-test-base';
import { Nav as BootstrapNav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar, { NavbarProps } from './Navbar';

describe('Navbar', () => {
  let props: NavbarProps;
  init(() => <Navbar {...props} />);

  beforeEach(() => {
    props = {
      className: undefined
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

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should include the specified class name', () => {
      shallow()
        .first()
        .prop('className')
        .should.contain('another-class');
    });

    it('should include the navbar class name', () => {
      shallow()
        .first()
        .prop('className')
        .should.contain('navbar');
    });
  });

  describe('when `className` is not defined', () => {
    it('should only include the default class names', () => {
      shallow()
        .first()
        .prop('className')
        .should.equal('navbar');
    });
  });
});
