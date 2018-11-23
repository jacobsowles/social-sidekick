import React from 'react';
import { init, mount, shallow, shallowTopLevelElement, should } from '@tests/test-base';
import Page from './Page';

interface PageProps {
  className?: string;
  subtitle?: string;
  title: string;
}

describe('Page', () => {
  let props: PageProps;

  init(
    () => (
      <Page {...props}>
        <p>Test</p>
      </Page>
    ),
    'main'
  );

  beforeEach(() => {
    props = {
      className: undefined,
      subtitle: undefined,
      title: 'title'
    };
  });

  it('should always render a main element', () => {
    shallow()
      .find('main')
      .should.have.lengthOf(1);
  });

  it('should always render a ContentBox component', () => {
    shallow()
      .find(Page.ContentBox)
      .should.have.lengthOf(1);
  });

  it('should always render a PageHeader component', () => {
    shallow()
      .find(Page.Header)
      .should.have.lengthOf(1);
  });

  it('should always pass `title` to the PageHeader component', () => {
    shallow()
      .find(Page.Header)
      .props()
      .title.should.equal('title');
  });

  it('should always render all children inside the ContentBox component', () => {
    mount()
      .find(Page.ContentBox)
      .first()
      .props()
      .children.should.deep.contain(mount().props().children);
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

    it('should include the page class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('page');
    });
  });

  describe('when `className` is undefined', () => {
    it('should only include the default class names', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.equal('page');
    });
  });

  describe('when `subtitle` is defined', () => {
    beforeEach(() => {
      props.subtitle = 'subtitle';
    });

    it('should pass `subtitle` to the PageHeader component', () => {
      shallow()
        .find(Page.Header)
        .props()
        .subtitle.should.equal('subtitle');
    });
  });

  describe('when `subtitle` is undefined', () => {
    it('should not pass `subtitle` to the PageHeader component', () => {
      should().equal(
        shallow()
          .find(Page.Header)
          .props().subtitle,
        undefined
      );
    });
  });
});
