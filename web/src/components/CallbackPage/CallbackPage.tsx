import React, { FunctionComponent } from 'react';
import loading from '@assets/loading.svg';

const CallbackPage: FunctionComponent = () => {
  return (
    <div className="callback-page">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default CallbackPage;
