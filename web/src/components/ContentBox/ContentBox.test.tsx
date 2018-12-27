import React from 'react';
import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import ContentBox, { ContentBoxProps } from './ContentBox';

describe('ContentBox', () => {
  let props: ContentBoxProps;

  init(
    () => (
      <ContentBox {...props}>
        <p>Test</p>
      </ContentBox>
    ),
    'div'
  );

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  describe('the rendered div element', () => {
    it('should contain all rendered child components', () => {
      shallowTopLevelElement()
        .children()
        .should.deep.equal(shallow().children());
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

    it('should include the content-box class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('content-box');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the content-box class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('content-box');
    });
  });
});
