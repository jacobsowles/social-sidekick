import React from 'react';
import { Provider } from 'react-redux';

import { mockStore, init, shallow, toJson } from '@tests/component-test-base';
import App from '@components/App';

describe('App', () => {
  init(
    () => (
      <Provider store={mockStore({})}>
        <App />
      </Provider>
    ),
    'div'
  );

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
