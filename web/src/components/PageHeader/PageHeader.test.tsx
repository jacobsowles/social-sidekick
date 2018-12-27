import React from 'react';
import { init, mount, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import PageHeader, { PageHeaderProps } from './PageHeader';

describe('PageHeader', () => {
  let props: PageHeaderProps;
  init(() => <PageHeader {...props} />, 'div');

  beforeEach(() => {
    props = {
      className: undefined,
      subtitle: undefined,
      title: 'title'
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  describe('the rendered div element', () => {
    it('should always contain an h1 component with the page title', () => {
      mount()
        .find('h1')
        .text()
        .should.equal('title');
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

    it('should include the page-header class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('page-header');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the page-header class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('page-header');
    });
  });

  describe('when `subtitle` is defined', () => {
    beforeEach(() => {
      props.subtitle = 'subtitle';
    });

    it('should render a p element with the page subtitle', () => {
      mount()
        .find('p')
        .text()
        .should.equal('subtitle');
    });
  });

  describe('when `subtitle` is not defined', () => {
    beforeEach(() => {
      props.subtitle = undefined;
    });

    it('should not render a p element', () => {
      mount()
        .find('p')
        .should.have.lengthOf(0);
    });
  });
});
