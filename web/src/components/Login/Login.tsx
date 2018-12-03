import React from 'react';

import AuthService from '@core/auth';

const Login: React.FunctionComponent = () => {
  debugger;
  const authService = new AuthService();
  authService.login();

  return <h1>Login</h1>;
};

export default Login;
