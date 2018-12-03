import React from 'react';
import { init, shallow, shallowTopLevelElement } from '@tests/component-test-base';
import ServiceIcon, { ServiceIconProps } from './ServiceIcon';

describe('Icon', () => {
  let props: ServiceIconProps;
  init(() => <ServiceIcon {...props} />, 'div');

  beforeEach(() => {
    props = {
      className: undefined,
      iconName: 'github'
    };
  });

  it('should render a div element', () => {
    shallow()
      .find('div')
      .should.have.lengthOf(1);
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
