import React from 'react';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { init, mount } from '@tests/test-base';
import PrivateRoute from './PrivateRoute';

interface PrivateRouteProps {
  component: React.Component | React.FunctionComponent;
  isAuthenticated: boolean;
  login: (...args: any[]) => any;
  path: string;
}

const TestComponent: React.FunctionComponent = () => {
  return <div />;
};

describe('PrivateRoute', () => {
  let props: PrivateRouteProps;

  init(
    () => (
      <MemoryRouter>
        <PrivateRoute {...props} />
      </MemoryRouter>
    ),
    Route
  );

  beforeEach(() => {
    props = {
      component: TestComponent,
      isAuthenticated: true,
      login: jest.fn(),
      path: '/'
    };
  });

  it('should always render a Route component', () => {
    mount()
      .find(Route)
      .should.have.lengthOf(1);
  });

  describe('when `isAuthenticated` is true', () => {
    it('should not call `login`', () => {
      mount();
      expect(props.login).not.toHaveBeenCalled();
    });
  });

  describe('when `isAuthenticated` is false', () => {
    beforeEach(() => {
      props.isAuthenticated = false;
    });

    it('should call `login`', () => {
      mount();
      expect(props.login).toHaveBeenCalled();
    });
  });
});
