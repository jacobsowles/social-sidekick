import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import Form from '@components/Form';
import LoadingSpinner from '@components/LoadingSpinner';
import TextArea from '@components/TextArea';
import TextInput from '@components/TextInput';
import './GitHubModule.scss';

export interface GitHubModuleProps {
  bio: string;
  blog: string;
  company: string;
  isLoaded: boolean;
  location: string;
  onCancel: (event: any) => void;
  onChange: (event: any, fieldName: string) => void;
  onSubmit: (event: any) => void;
}

const GitHubModule: FunctionComponent<GitHubModuleProps> = ({
  bio,
  blog,
  company,
  isLoaded,
  location,
  onCancel,
  onChange,
  onSubmit
}) => {
  return isLoaded ? (
    <Form.Wrapper className="github-module" onSubmit={onSubmit}>
      <Form.Field>
        <TextArea
          maxLength={160}
          onChange={event => onChange(event, 'bio')}
          placeholder={'Bio'}
          value={bio}
        />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'users']} />
        <TextInput
          onChange={event => onChange(event, 'company')}
          placeholder={'Company'}
          value={company}
        />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
        <TextInput
          onChange={event => onChange(event, 'location')}
          placeholder={'Location'}
          value={location}
        />
      </Form.Field>

      <Form.Field>
        <FontAwesomeIcon icon={['fas', 'link']} />
        <TextInput
          onChange={event => onChange(event, 'blog')}
          placeholder={'Website'}
          value={blog}
        />
      </Form.Field>

      <div className="form-buttons">
        <button className="button button-primary" type="submit">
          Save
        </button>
        <button className="button button-default" onClick={onCancel} type="reset">
          Cancel
        </button>
      </div>
    </Form.Wrapper>
  ) : (
    <LoadingSpinner />
  );
};

export default GitHubModule;
