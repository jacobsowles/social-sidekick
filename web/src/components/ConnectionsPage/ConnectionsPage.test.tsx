import React from 'react';
import { init, shallow, shallowTopLevelElement } from '@tests/test-base';
import IConnectionsPage from './IConnectionsPage';
import ConnectionsPage from './ConnectionsPage';
import Page from '../Page';

describe('ConnectionsPage', () => {
  let props: IConnectionsPage;

  init(() => <ConnectionsPage {...props} />, Page);

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
    shallowTopLevelElement()
      .prop('title')
      .should.not.equal(undefined);
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
