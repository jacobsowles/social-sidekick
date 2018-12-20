import queryString, { OutputParams } from 'query-string';
import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';

import LoadingSpinner from '@components/LoadingSpinner';
import { getAccessToken } from '@core/api';

interface OAuthRedirectPageOwnProps {
  alert: any;
  history: any;
  location: any;
  match: any;
}

class OAuthRedirectPage extends Component<OAuthRedirectPageOwnProps> {
  public async componentDidMount() {
    try {
      const params: OutputParams = queryString.parse(this.props.location.search);
      await getAccessToken(params.code, params.serviceId, 'github', params.state, params.userId);
      this.props.alert.success('Connection successful!');
      this.props.history.push('/connections');
    } catch (error) {
      this.props.alert.error('Failed to retrieve access token.');
      this.props.history.push('/connections');
    }
  }

  public render() {
    return <LoadingSpinner />;
  }
}

export default withAlert(withRouter(OAuthRedirectPage));
