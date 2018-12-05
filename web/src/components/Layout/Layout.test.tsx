import React from 'react';

import { init, render, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import Layout, { LayoutProps } from './Layout';

jest.mock('../Routes', () => () => <span id="routes" />);

describe('Layout', () => {
  let props: LayoutProps;
  init(() => <Layout {...props} />, 'div');

  beforeEach(() => {
    props = {
      user: undefined
    };
  });

  it('should always render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  it('should always render a Router component', () => {
    render()
      .find('#routes')
      .should.have.lengthOf(1);
  });

  it('should always render a footer element', () => {
    render()
      .find('footer')
      .should.have.lengthOf(1);
  });

  it('should only include the default class names', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('layout');
  });
});
