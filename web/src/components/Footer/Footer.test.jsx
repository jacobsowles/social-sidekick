import React from 'react';
import {
  init,
  mount,
  mountTopLevelElement,
  shallow,
  shallowTopLevelElement
} from '@tests/test-base';
import Footer from './Footer';

describe('Footer', () => {
  let props;
  init(
    () => (
      <Footer {...props}>
        <p>Test</p>
      </Footer>
    ),
    'footer'
  );

  const container = () => {
    return mountTopLevelElement().props().children;
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a footer', () => {
    shallow()
      .find('footer')
      .should.have.lengthOf(1);
  });

  describe('the rendered footer', () => {
    it('should render a bootstrap container', () => {
      container().props.className.should.equal('container');
    });
  });

  describe('the rendered container', () => {
    it('should contain all rendered child components', () => {
      container().props.children.should.deep.equal(mount().props().children);
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should add the class name to the footer', () => {
      shallowTopLevelElement()
        .props()
        .className.should.equal('footer another-class');
    });
  });

  describe('when `className` is not defined', () => {
    beforeEach(() => {
      props.className = undefined;
    });

    it('should only include the default class names', () => {
      shallowTopLevelElement()
        .props()
        .className.should.equal('footer');
    });
  });
});
