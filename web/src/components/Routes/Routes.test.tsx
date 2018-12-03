import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import Navbar from '@components/Navbar';
import Router from '@components/Router';
import rootReducer from '@reducers/index';
import { init, shallow } from '@tests/component-test-base';

jest.mock(
  '@core/auth/auth.service',
  () =>
    class MockAuthService {
      public login = jest.fn();
      public isAuthenticated = () => true;
    }
);

jest.mock('@core/history/history.service', () => new Object()); // using {} instead of new Object() will generate a warning when tests are run

describe('Router', () => {
  init(
    () => (
      <Provider store={createStore(rootReducer)}>
        <Router />
      </Provider>
    ),
    BrowserRouter
  );

  it('should always render a ReactRouter component', () => {
    shallow()
      .find(BrowserRouter)
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
