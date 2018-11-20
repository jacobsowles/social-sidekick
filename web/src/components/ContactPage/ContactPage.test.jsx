import React from 'react';
import { shallow as enzymeShallow } from 'enzyme';
import { init } from '@tests/test-base';
import ContactPage from './ContactPage';
import Page from '../Page';

describe('ContactPage', () => {
  init();
  let props;

  const shallow = () => {
    return enzymeShallow(<ContactPage {...props} />);
  };

  const topLevelElement = () => {
    return shallow()
      .find(Page)
      .first();
  };

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a Page component', () => {
    shallow()
      .find(Page)
      .should.have.lengthOf(1);
  });

  it('should pass `title` to the Page component as a prop', () => {
    topLevelElement()
      .props()
      .title.should.not.equal(undefined);
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

    it('should include the contact-page class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('contact-page');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the contact-page class name', () => {
      topLevelElement()
        .props()
        .className.should.contain('contact-page');
    });
  });
});
