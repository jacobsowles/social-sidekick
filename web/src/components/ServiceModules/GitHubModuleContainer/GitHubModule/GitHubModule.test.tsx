import React from 'react';

import { init, shallow, toJson } from '@tests/component-test-base';
import GitHubModule, { GitHubModuleProps } from './GitHubModule';

describe('GitHubModule', () => {
  let props: GitHubModuleProps;
  init(() => <GitHubModule {...props} />, 'div');

  beforeEach(() => {
    props = {
      bio: undefined,
      blog: undefined,
      company: undefined,
      isLoaded: false,
      location: undefined,
      onCancel: jest.fn(),
      onChange: jest.fn(),
      onSubmit: jest.fn()
    };
  });

  it('should render the component without crashing', () => {
    toJson(shallow()).should.matchSnapshot();
  });
});
