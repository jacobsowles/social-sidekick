import * as React from 'react';
const loading = require('@assets/loading.svg'); // using require because importing svg doesn't seem to work with typescript

const CallbackPage: React.FunctionComponent = () => {
  return (
    <div className="callback-page">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default CallbackPage;
