import React from 'react';
import { configure, mount } from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import ContentBox from './ContentBox';

describe('ContentBox', () => {
  configure({ adapter: new Adapter() });

  const should = chai.should();
  let props;

  const contentBox = () => {
    return mount(
      <ContentBox {...props}>
        <p>Test</p>
      </ContentBox>
    );
  };

  const topLevelElement = () => {
    return contentBox()
      .find('div')
      .first();
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a div', () => {
    topLevelElement().should.not.equal(undefined);
  });

  describe('the rendered div', () => {
    it('should contain all rendered child components', () => {
      topLevelElement()
        .props()
        .children.should.deep.equal(contentBox().props().children);
    });
  });

  describe('when `className` is defined', () => {
    beforeEach(() => {
      props.className = 'another-class';
    });

    it('should add the class name to the wrapping div', () => {
      topLevelElement()
        .props()
        .className.should.equal('content-box another-class');
    });
  });

  describe('when `className` is undefined', () => {
    it('should only have the default class name', () => {
      topLevelElement()
        .props()
        .className.should.equal('content-box');
    });
  });
});
