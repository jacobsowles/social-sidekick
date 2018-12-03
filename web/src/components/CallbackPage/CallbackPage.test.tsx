import React from 'react';
import { init, mount, shallow } from '@tests/component-test-base';
import CallbackPage from './CallbackPage';

describe('CallbackPage', () => {
  init(() => <CallbackPage />, 'div');

  it('should render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });
});
