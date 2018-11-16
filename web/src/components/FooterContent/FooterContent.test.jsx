import React from 'react';
import ReactDOM from 'react-dom';
import FooterContent from './FooterContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterContent />, div);
});
