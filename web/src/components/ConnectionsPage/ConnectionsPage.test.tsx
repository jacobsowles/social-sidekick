import React from 'react';
import { init, shallow, shallowTopLevelElement } from '@tests/test-base';
import IConnectionsPage from './IConnectionsPage';
import ConnectionsPage from './ConnectionsPage';

describe('ConnectionsPage', () => {
  let props: IConnectionsPage;
  init(() => <ConnectionsPage {...props} />, 'main');

  beforeEach(() => {
    props = {
      className: undefined
    };
  });

  it('should render a main element', () => {
    shallow()
      .find('main')
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
