import React from 'react';
import { mount } from 'enzyme';
import { init } from '@tests/test-base';
import CallbackPage from './CallbackPage';

describe('CallbackPage', () => {
  init();
  let props;

  const component = () => {
    return mount(<CallbackPage {...props} />);
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
    it('should always render an image element', () => {
      component()
        .find('img')
        .should.have.lengthOf(1);
    });
  });
});
