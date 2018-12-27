import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { init, shallow, toJson } from '@tests/component-test-base';
import Routes, { RoutesProps } from './Routes';

jest.mock(
  '@core/auth/auth.service',
  () =>
    class MockAuthService {
      public login = jest.fn();
      public isAuthenticated = () => true;
    }
);

describe('Routes', () => {
  let props: RoutesProps;

  init(() => <Routes {...props} />);

  beforeEach(() => {
    props = {
      handleAuthentication: jest.fn(),
      serviceModules: null,
      services: null
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
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

  it('should always render a Route component', () => {
    shallow()
      .find(Route)
      .should.have.length.greaterThan(0);
  });
});
