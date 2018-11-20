import React from 'react';
import { mount } from 'enzyme';
import { init } from '@tests/test-base';
import Footer from './Footer';

describe('Footer', () => {
  init();
  let props;

  const component = () => {
    return mount(
      <Footer {...props}>
        <p>Test</p>
      </Footer>
    );
  };

  const topLevelElement = () => {
    return component()
      .find('footer')
      .first();
  };

  const container = () => {
    return topLevelElement().props().children;
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a footer', () => {
    topLevelElement().should.not.equal(undefined);
  });

  describe('the rendered footer', () => {
    it('should render a bootstrap container', () => {
      container().props.className.should.equal('container');
    });
  });

  describe('the rendered container', () => {
    it('should contain all rendered child components', () => {
      container().props.children.should.deep.equal(component().props().children);
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should add the class name to the footer', () => {
      topLevelElement()
        .props()
        .className.should.equal('footer another-class');
    });
  });

  describe('when `className` is not defined', () => {
    beforeEach(() => {
      props.className = undefined;
    });

    it('should only include the default class names', () => {
      topLevelElement()
        .props()
        .className.should.equal('footer');
    });
  });
});
