import React from 'react';
import { mount } from 'enzyme';
import { init } from '@tests/test-base';
import FooterContent from './FooterContent';

describe('Footer', () => {
  init();
  let props;

  const component = () => {
    return mount(<FooterContent {...props}>Test</FooterContent>);
  };

  const topLevelElement = () => {
    return component()
      .find('p')
      .first();
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a paragraph element', () => {
    topLevelElement().should.not.equal(undefined);
  });

  describe('the rendered paragraph element', () => {
    it('should contain all rendered child components', () => {
      topLevelElement()
        .props()
        .children.should.equal(component().props().children);
    });
  });

  describe('when `pullRight` is defined', () => {
    beforeEach(() => {
      props.pullRight = true;
    });

    it('should include the float-right class', () => {
      topLevelElement()
        .props()
        .className.should.contain('float-right');
    });

    it('should not include the float-left class', () => {
      topLevelElement()
        .props()
        .className.should.not.contain('float-left');
    });
  });

  describe('when `pullRight` is false', () => {
    beforeEach(() => {
      props.pullRight = false;
    });

    it('should include the float-left class', () => {
      topLevelElement()
        .props()
        .className.should.contain('float-left');
    });

    it('should not include the float-right class', () => {
      topLevelElement()
        .props()
        .className.should.not.contain('float-right');
    });
  });

  describe('when `pullRight` is undefined', () => {
    beforeEach(() => {
      props.pullRight = undefined;
    });

    it('should include the float-left class', () => {
      topLevelElement()
        .props()
        .className.should.contain('float-left');
    });

    it('should not include the float-right class', () => {
      topLevelElement()
        .props()
        .className.should.not.contain('float-right');
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should include the specified class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('another-class');
    });

    it('should include the footer-content class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('footer-content');
    });

    it('should include the float-left class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('float-left');
    });
  });

  describe('when `className` is not defined', () => {
    beforeEach(() => {
      props.className = undefined;
    });

    it('should include the footer-content class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('footer-content');
    });

    it('should include the float-left class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('float-left');
    });
  });
});
