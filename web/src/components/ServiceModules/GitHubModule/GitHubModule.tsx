import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import Form from '@components/Form';
import TextArea from '@components/TextArea';
import TextInput from '@components/TextInput';
import './GitHubModule.scss';

const GitHubModule: FunctionComponent = () => {
  return (
    <Form.Wrapper className="github-module">
      <Form.Field>
        <TextArea maxLength={160} placeholder={'Bio'} />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'users']} />
        <TextInput placeholder={'Company'} />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
        <TextInput placeholder={'Location'} />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'link']} />
        <TextInput placeholder={'Website'} />
      </Form.Field>

      <div className="form-buttons">
        <button className="button button-primary" type="submit">
          Submit
        </button>
        <button className="button button-default" type="reset">
          Cancel
        </button>
      </div>
    </Form.Wrapper>
  );
};

export default GitHubModule;
