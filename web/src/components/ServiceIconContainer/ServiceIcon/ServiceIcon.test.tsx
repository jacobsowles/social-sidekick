import React from 'react';

import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import ServiceIcon, { ServiceIconProps } from './ServiceIcon';

describe('ServiceIcon', () => {
  let props: ServiceIconProps;
  init(() => <ServiceIcon {...props} />, 'div');

  beforeEach(() => {
    props = {
      className: undefined,
      icon: 'github',
      onClick: jest.fn(),
      onMouseOut: jest.fn(),
      onMouseOver: jest.fn()
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
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

    it('should include the service-icon class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('service-icon');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the service-icon class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('service-icon');
    });
  });
});
