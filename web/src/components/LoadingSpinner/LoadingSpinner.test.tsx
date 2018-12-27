import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  init(() => <LoadingSpinner />);

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
