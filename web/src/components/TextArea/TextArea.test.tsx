import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import TextArea, { TextAreaProps } from './TextArea';

describe('TextArea', () => {
  let props: TextAreaProps;
  init(() => <TextArea {...props} />);

  beforeEach(() => {
    props = {
      className: undefined,
      maxLength: undefined,
      onChange: jest.fn(),
      placeholder: undefined,
      value: undefined
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
