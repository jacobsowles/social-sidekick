import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from '@reducers/index';
import { init } from '@tests/component-test-base';
import App from './App';

describe('App', () => {
  const store = createStore(rootReducer);

  init(() => (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ));
});
