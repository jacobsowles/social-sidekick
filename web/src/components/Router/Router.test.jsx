import React from 'react';
import { init, shallow } from '@tests/test-base';
import { Router as ReactRouter, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Router from './Router';

jest.mock(
  '@api/auth-service',
  () =>
    class MockAuthService {
      isAuthenticated = () => true;
      login = jest.fn();
    }
);
jest.mock('@api/history', () => new Object()); // using {} instead of new Object() will generate a warning when tests are run

describe('Router', () => {
  init(() => <Router />, ReactRouter);

  it('should always render a ReactRouter component', () => {
    shallow()
      .find(ReactRouter)
      .should.have.lengthOf(1);
  });

  it('should always render a Navbar component', () => {
    shallow()
      .find(Navbar)
      .should.have.lengthOf(1);
  });

  it('should always render a container', () => {
    shallow()
      .find('.container')
      .should.have.lengthOf(1);
  });

  it('should always render a Switch component', () => {
    shallow()
      .find(Switch)
      .should.have.lengthOf(1);
  });

  it('should always pass `isAuthenticated` to the Navbar component', () => {
    shallow()
      .find(Navbar)
      .props()
      .isAuthenticated.should.not.equal(undefined);
  });

  it('should always pass `onLogin` function to the Navbar component', () => {
    (typeof shallow()
      .find(Navbar)
      .props().onLogin).should.equal('function');
  });

  it('should always pass `onLogout` function to the Navbar component', () => {
    (typeof shallow()
      .find(Navbar)
      .props().onLogout).should.equal('function');
  });
});
