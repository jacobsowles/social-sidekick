import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from '@components/App';
import rootReducer from '@reducers/index';
import './styles/index.scss';

const composeEnhancers = composeWithDevTools({});
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);
const browserSupportsHistory = 'pushState' in window.history;

render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!browserSupportsHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
