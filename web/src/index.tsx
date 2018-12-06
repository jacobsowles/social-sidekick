import React from 'react';
import { Provider as AlertProvider, AlertPosition, AlertTransition } from 'react-alert';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AlertTemplate from '@components/AlertTemplate';
import App from '@components/App';
import rootReducer from '@reducers/index';
import './styles/index.scss';

const composeEnhancers = composeWithDevTools({});
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);
const browserSupportsHistory = 'pushState' in window.history;

const alertOptions = {
  position: 'top right' as AlertPosition,
  timeout: 5000,
  transition: 'fade' as AlertTransition
};

render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!browserSupportsHistory}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
