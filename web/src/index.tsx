import React from 'react';
import { Provider as AlertProvider, AlertPosition, AlertTransition } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
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

const alertOptions = {
  offset: '30px',
  position: 'bottom center' as AlertPosition,
  timeout: 5000,
  transition: 'scale' as AlertTransition
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
