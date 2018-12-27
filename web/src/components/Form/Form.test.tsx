import React from 'react';
import { init, shallow, toJson } from '@tests/component-test-base';
import Form from './Form';

describe('Form', () => {
  init(
    () => (
      <Form.Wrapper>
        <Form.Field>Test</Form.Field>
      </Form.Wrapper>
    ),
    'div'
  );

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
