import queryString, { OutputParams } from 'query-string';
import React, { Component } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import LoadingSpinner from '@components/LoadingSpinner';
import ApiService from '@core/api';

interface OAuthRedirectPageOwnProps extends RouteComponentProps {
  alert: InjectedAlertProp;
}

class OAuthRedirectPage extends Component<OAuthRedirectPageOwnProps> {
  public async componentDidMount() {
    try {
      const api = new ApiService();
      const params: OutputParams = queryString.parse(this.props.location.search);

      await api.getAccessToken(
        params.code,
        params.serviceId,
        'github',
        params.state,
        params.userId
      );

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
