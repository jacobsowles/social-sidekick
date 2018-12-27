import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { mockStore, init, shallow, toJson } from '@tests/component-test-base';
import Auth0PostAuthPage from '@pages/Auth0PostAuthPage';

describe('Auth0PostAuthPage', () => {
  init(
    () => (
      <Provider store={mockStore({})}>
        <BrowserRouter>
          <Auth0PostAuthPage />
        </BrowserRouter>
      </Provider>
    ),
    'div'
  );

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
