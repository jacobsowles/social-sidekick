import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';

describe('OAuthCallbackPage', () => {
  init(() => <OAuthCallbackPage />, 'div');

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
