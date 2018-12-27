import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import Collapsible from '@components/Collapsible';

describe('Collapsible', () => {
  init(
    () => (
      <Collapsible.Box>
        <Collapsible.Trigger />
        <Collapsible.Body />
      </Collapsible.Box>
    ),
    'div'
  );

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
