import React, { FunctionComponent } from 'react';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

import { init, mount } from '@tests/component-test-base';
import PrivateRoute, { PrivateRouteProps } from './PrivateRoute';

const TestComponent: FunctionComponent = () => {
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
      authService: undefined,
      component: TestComponent,
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
