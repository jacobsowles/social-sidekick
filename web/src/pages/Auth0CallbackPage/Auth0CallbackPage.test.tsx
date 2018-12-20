import React from 'react';

import { init, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import Auth0CallbackPage from '@pages/Auth0CallbackPage';

describe('Auth0CallbackPage', () => {
  init(() => <Auth0CallbackPage />, 'div');

  it('should always render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  it('should only include the default class names', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('auth0-callback-page');
  });
});
