import React from 'react';

import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import Auth0CallbackPage from '@pages/Auth0CallbackPage';

describe('Auth0CallbackPage', () => {
  init(() => <Auth0CallbackPage handleAuthentication={jest.fn} />, 'div');

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  it('should only include the default class names', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('auth0-callback-page');
  });
});
