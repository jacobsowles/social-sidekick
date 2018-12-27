import React from 'react';
import {
  init,
  mountTopLevelElement,
  shallow,
  shallowTopLevelElement,
  toJson
} from '@tests/component-test-base';
import Footer, { FooterProps } from './Footer';

describe('Footer', () => {
  let props: FooterProps;

  init(
    () => (
      <Footer {...props}>
        <p>Test</p>
      </Footer>
    ),
    'footer'
  );

  const container = () => {
    return mountTopLevelElement().children();
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  describe('the rendered footer element', () => {
    it('should render a bootstrap container', () => {
      container()
        .prop('className')
        .should.equal('container');
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should add the class name to the footer', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.equal('footer another-class');
    });
  });

  describe('when `className` is not defined', () => {
    beforeEach(() => {
      props.className = undefined;
    });

    it('should only include the default class names', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.equal('footer');
    });
  });
});
