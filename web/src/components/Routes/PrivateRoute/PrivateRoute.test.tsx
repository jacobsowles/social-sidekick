import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

import { init, shallow } from '@tests/component-test-base';
import PrivateRoute, { PrivateRouteProps } from './PrivateRoute';

const TestComponent: FunctionComponent = () => {
  return <div />;
};

describe('PrivateRoute', () => {
  let props: PrivateRouteProps;

  init(() => <PrivateRoute {...props} />);

  beforeEach(() => {
    props = {
      component: TestComponent,
      path: '/'
    };
  });

  it('should always render a Route component', () => {
    shallow()
      .find(Route)
      .should.have.lengthOf(1);
  });
});
