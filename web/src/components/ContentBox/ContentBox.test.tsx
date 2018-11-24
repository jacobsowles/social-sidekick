import React from 'react';
import { init, shallow, shallowTopLevelElement } from '@tests/test-base';
import IContentBox from './IContentBox';
import ContentBox from './ContentBox';

describe('ContentBox', () => {
  let props: IContentBox;

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

  it('should render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
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
