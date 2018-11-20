import React from 'react';
import { mount } from 'enzyme';
import { init } from '@tests/test-base';
import ContentBox from './ContentBox';

describe('ContentBox', () => {
  init();
  let props;

  const component = () => {
    return mount(
      <ContentBox {...props}>
        <p>Test</p>
      </ContentBox>
    );
  };

  const topLevelElement = () => {
    return component()
      .find('div')
      .first();
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a div element', () => {
    topLevelElement().should.not.equal(undefined);
  });

  describe('the rendered div element', () => {
    it('should contain all rendered child components', () => {
      topLevelElement()
        .props()
        .children.should.deep.equal(component().props().children);
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

    it('should include the content-box class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('content-box');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the content-box class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('content-box');
    });
  });
});
