import React, { Component, ComponentState } from 'react';

interface Auth0CallbackPageProps {
  handleAuthentication: (nextState: ComponentState) => void;
}

class Auth0CallbackPage extends Component<Auth0CallbackPageProps> {
  public componentDidMount() {
    this.props.handleAuthentication(this.props);
  }

  public render() {
    return <div className="auth0-callback-page" />;
  }
}

export default Auth0CallbackPage;
