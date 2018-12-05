import React from 'react';

import Footer from '@components/Footer';
import Routes from '@components/Routes';
import { init, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import Layout, { LayoutProps } from './Layout';

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
    shallow()
      .find(Routes)
      .should.have.lengthOf(1);
  });

  it('should always render a footer element', () => {
    shallow()
      .find(Footer)
      .should.have.lengthOf(1);
  });

  it('should only include the default class names', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('layout');
  });
});
