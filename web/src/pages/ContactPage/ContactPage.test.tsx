import React from 'react';

import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import ContactPage from '@pages/ContactPage';

describe('ContactPage', () => {
  init(() => <ContactPage />, 'div');

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  it('should only include the default class name', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('contact-page');
  });
});
