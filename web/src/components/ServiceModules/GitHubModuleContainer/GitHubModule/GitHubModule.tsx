import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import Form from '@components/Form';
import TextArea from '@components/TextArea';
import TextInput from '@components/TextInput';
import './GitHubModule.scss';
import LoadingSpinner from '@components/LoadingSpinner';

interface GitHubModuleProps {
  profileDetails: any;
}

const GitHubModule: FunctionComponent<GitHubModuleProps> = ({ profileDetails }) => {
  return profileDetails ? (
    <Form.Wrapper className="github-module">
      <Form.Field>
        <TextArea maxLength={160} placeholder={'Bio'} value={profileDetails.bio} />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'users']} />
        <TextInput placeholder={'Company'} value={profileDetails.company} />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
        <TextInput placeholder={'Location'} value={profileDetails.location} />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'link']} />
        <TextInput placeholder={'Website'} value={profileDetails.blog} />
      </Form.Field>

      <div className="form-buttons">
        <button className="button button-primary" type="submit">
          Save
        </button>
        <button className="button button-default" type="reset">
          Cancel
        </button>
      </div>
    </Form.Wrapper>
  ) : (
    <LoadingSpinner />
  );
};

export default GitHubModule;
