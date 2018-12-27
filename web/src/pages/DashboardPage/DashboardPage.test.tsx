import React from 'react';

import { init, shallow, shallowTopLevelElement, toJson } from '@tests/component-test-base';
import DashboardPage, { DashboardPageProps } from '@pages/DashboardPage';

describe('DashboardPage', () => {
  let props: DashboardPageProps;
  init(() => <DashboardPage {...props} />, 'div');

  beforeEach(() => {
    props = { serviceModules: null, services: null, userId: undefined };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });

  it('should only include the default class name', () => {
    shallowTopLevelElement()
      .prop('className')
      .should.equal('dashboard');
  });
});
