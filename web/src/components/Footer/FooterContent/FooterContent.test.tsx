import React from 'react';
import { init, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import FooterContent, { FooterContentProps } from './FooterContent';

describe('FooterContent', () => {
  let props: FooterContentProps;
  init(() => <FooterContent {...props}>Test</FooterContent>, 'p');

  beforeEach(() => {
    props = {
      className: undefined,
      pullRight: undefined
    };
  });

  it('should render a paragraph element', () => {
    shallow()
      .find('p')
      .should.have.lengthOf(1);
  });

  describe('when `pullRight` is defined', () => {
    beforeEach(() => {
      props.pullRight = true;
    });

    it('should include the float-right class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('float-right');
    });

    it('should include the footer-content class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('footer-content');
    });

    it('should not include the float-left class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.not.contain('float-left');
    });
  });

  describe('when `pullRight` is false', () => {
    beforeEach(() => {
      props.pullRight = false;
    });

    it('should include the float-left class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('float-left');
    });

    it('should include the footer-content class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('footer-content');
    });

    it('should not include the float-right class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.not.contain('float-right');
    });
  });

  describe('when `pullRight` is undefined', () => {
    beforeEach(() => {
      props.pullRight = undefined;
    });

    it('should include the float-left class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('float-left');
    });

    it('should include the footer-content class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('footer-content');
    });

    it('should not include the float-right class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.not.contain('float-right');
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should include the specified class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('another-class');
    });

    it('should include the footer-content class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('footer-content');
    });

    it('should include the float-left class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('float-left');
    });
  });

  describe('when `className` is not defined', () => {
    beforeEach(() => {
      props.className = undefined;
    });

    it('should include the footer-content class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('footer-content');
    });

    it('should include the float-left class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('float-left');
    });
  });
});
