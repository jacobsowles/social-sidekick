import React from 'react';

import { init, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import LandingPage from '@components/LandingPage';

describe('LandingPage', () => {
  init(() => <LandingPage />, 'div');

  it('should always render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  it('should only include the default class name', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('landing-page');
  });
});
