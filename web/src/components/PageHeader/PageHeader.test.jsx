import React from 'react';
import { mount } from 'enzyme';
import { init } from '@tests/test-base';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  init();
  let props;

  const component = () => {
    return mount(<PageHeader {...props} />);
  };

  const topLevelElement = () => {
    return component()
      .find('div')
      .first();
  };

  beforeEach(() => {
    props = { className: undefined, subtitle: undefined, title: 'title' };
  });

  it('should render a div element', () => {
    topLevelElement().should.not.equal(undefined);
  });

  describe('the rendered div element', () => {
    it('should always contain an h1 component with the page title', () => {
      component()
        .find('h1')
        .first()
        .props()
        .children.should.equal('title');
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

    it('should include the page-header class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('page-header');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the page-header class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('page-header');
    });
  });

  describe('when `subtitle` is defined', () => {
    beforeEach(() => {
      props.subtitle = 'subtitle';
    });

    it('should render a p element with the page subtitle', () => {
      component()
        .find('p')
        .first()
        .props()
        .children.should.equal('subtitle');
    });
  });

  describe('when `subtitle` is not defined', () => {
    beforeEach(() => {
      props.subtitle = undefined;
    });

    it('should not render a p element', () => {
      component()
        .find('p')
        .should.have.lengthOf(0);
    });
  });
});
