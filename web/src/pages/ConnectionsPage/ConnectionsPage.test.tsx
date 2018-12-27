import React from 'react';

import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import ConnectionsPage, { ConnectionsPageProps } from './ConnectionsPage';

describe('ConnectionsPage', () => {
  let props: ConnectionsPageProps;
  init(() => <ConnectionsPage {...props} />, 'main');

  beforeEach(() => {
    props = {
      className: '',
      services: null
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

    it('should include the connections-page class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('connections-page');
    });
  });

  describe('when `className` is undefined', () => {
    it('should include the connections-page class name', () => {
      shallowTopLevelElement()
        .prop('className')
        .should.contain('connections-page');
    });
  });
});
