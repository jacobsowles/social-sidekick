import React from 'react';
import ReactDOM from 'react-dom';
import CallbackPage from './CallbackPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CallbackPage />, div);
});
