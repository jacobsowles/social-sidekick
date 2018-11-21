import React from 'react';
import { init, mount, shallow, shallowTopLevelElement } from '@tests/test-base';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  let props;
  init(() => <PageHeader {...props} />, 'div');

  beforeEach(() => {
    props = { className: undefined, subtitle: undefined, title: 'title' };
  });

  it('should render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
  });

  describe('the rendered div element', () => {
    it('should always contain an h1 component with the page title', () => {
      mount()
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
      shallowTopLevelElement()
        .props()
        .className.should.contain('another-class');
    });

    it('should include the page-header class name', () => {
      shallowTopLevelElement()
        .props()
        .className.should.contain('page-header');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the page-header class name', () => {
      shallowTopLevelElement()
        .props()
        .className.should.contain('page-header');
    });
  });

  describe('when `subtitle` is defined', () => {
    beforeEach(() => {
      props.subtitle = 'subtitle';
    });

    it('should render a p element with the page subtitle', () => {
      mount()
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
      mount()
        .find('p')
        .should.have.lengthOf(0);
    });
  });
});
