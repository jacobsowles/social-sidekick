import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import './GitHubModule.scss';

const GitHubModule: FunctionComponent = () => {
  return (
    <form onSubmit={onSubmit} className="github-module">
      <div className="form-item">
        <textarea aria-label="Bio" maxLength={160} placeholder="Bio" />
      </div>

      <div className="form-item">
        <FontAwesomeIcon icon={['fas', 'users']} />
        <input type="text" aria-label="Company" placeholder="Company" />
      </div>

      <div className="form-item">
        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
        <input type="text" aria-label="Location" placeholder="Location" />
      </div>

      <div className="form-item">
        <FontAwesomeIcon icon={['fas', 'link']} />
        <input type="text" aria-label="Website" placeholder="Website" />
      </div>

      <div className="form-buttons">
        <button className="button button-primary" type="submit">
          Submit
        </button>
        <button className="button button-default" type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
};

const onSubmit = async (values: any) => {
  // TODO
};

const validate = (values: any) => {
  // TODO
};

export default GitHubModule;
