import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import TextInput, { TextInputProps } from './TextInput';

describe('TextInput', () => {
  let props: TextInputProps;
  init(() => <TextInput {...props} />);

  beforeEach(() => {
    props = {
      className: undefined,
      onChange: jest.fn(),
      placeholder: undefined,
      value: undefined
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
