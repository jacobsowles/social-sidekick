import React from 'react';
import { init, mount, shallow } from '@tests/test-base';
import CallbackPage from './CallbackPage';

describe('CallbackPage', () => {
  init(() => <CallbackPage />, 'div');

  it('should render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  describe('the rendered div element', () => {
    it('should always render an image element', () => {
      mount()
        .find('img')
        .should.have.lengthOf(1);
    });
  });
});
