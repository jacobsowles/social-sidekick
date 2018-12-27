import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import AlertTemplate, { AlertTemplateProps } from '@components/AlertTemplate';

describe('AlertTemplate', () => {
  let props: AlertTemplateProps;
  init(() => <AlertTemplate {...props} />, 'div');

  beforeEach(() => {
    props = {
      options: {
        type: undefined
      }
    };
  });

  it('should render the component with error icon without crashing', () => {
    props.options.type = 'error';
    toJson(shallow()).should.matchSnapshot();
  });

  it('should render the component with info icon without crashing', () => {
    props.options.type = 'info';
    toJson(shallow()).should.matchSnapshot();
  });

  it('should render the component with success icon without crashing', () => {
    props.options.type = 'success';
    toJson(shallow()).should.matchSnapshot();
  });
});
