import React, { Component, ComponentState } from 'react';

interface CallbackPageProps {
  handleAuthentication: (nextState: ComponentState) => void;
}

class CallbackPage extends Component<CallbackPageProps> {
  public componentDidMount() {
    this.props.handleAuthentication(this.props);
  }

  public render() {
    return <div className="callback-page" />;
  }
}

export default CallbackPage;
