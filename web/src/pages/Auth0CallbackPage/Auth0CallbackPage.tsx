import React, { ComponentState, PureComponent } from 'react';

interface Auth0CallbackPageProps {
  handleAuthentication: (nextState: ComponentState) => void;
}

class Auth0CallbackPage extends PureComponent<Auth0CallbackPageProps> {
  public componentDidMount() {
    this.props.handleAuthentication(this.props);
  }

  public render() {
    return <div className="auth0-callback-page" />;
  }
}

export default Auth0CallbackPage;
