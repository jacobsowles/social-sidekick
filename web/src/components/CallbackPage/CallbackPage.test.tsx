import React from 'react';

import { init, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import CallbackPage from '@components/CallbackPage';

describe('CallbackPage', () => {
  init(() => <CallbackPage />, 'div');

  it('should always render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  it('should always include the default class names', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('callback-page');
  });
});
