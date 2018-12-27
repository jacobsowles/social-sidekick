import React from 'react';

import Footer from '@components/Footer';
import RoutesContainer from '@components/RoutesContainer';
import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import Layout, { LayoutProps } from './Layout';

describe('Layout', () => {
  let props: LayoutProps;
  init(() => <Layout {...props} />, 'div');

  beforeEach(() => {
    props = {
      handleLogout: jest.fn(),
      user: undefined
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  it('should always render a Router component', () => {
    shallow()
      .find(RoutesContainer)
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
