import React from 'react';
import { init, render, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import App from './App';

jest.mock('../Router', () => () => <span id="router" />);

describe('App', () => {
  init(() => <App />, 'div');

  it('should always render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  it('should always render a Router component', () => {
    render()
      .find('#router')
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
