import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from '@reducers/index';
import { init, render, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import App from './App';

describe('App', () => {
  const store = createStore(rootReducer);

  init(
    () => (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ),
    'div'
  );

  it('should always render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  it('should always render a footer element', () => {
    render()
      .find('footer')
      .should.have.lengthOf(1);
  });

  it('should always include the default class names', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('app');
  });
});
