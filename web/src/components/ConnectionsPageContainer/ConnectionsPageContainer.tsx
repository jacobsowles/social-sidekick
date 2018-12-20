import axios, { AxiosResponse } from 'axios';
import React, { Component, Dispatch } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { fetchServicesForUserSuccess } from '@actions/service.actions';
import ConnectionsPage from '@components/ConnectionsPage';
import { AppState, UserService } from '@core/types';

interface ConnectionsPageContainerOwnProps {
  alert: InjectedAlertProp;
}

interface ConnectionsPageContainerDispatchProps {
  fetchServicesForUser: (userId: string) => Promise<UserService[]>;
}

interface ConnectionsPageContainerStateProps {
  services: UserService[];
  userId: string;
}

type ConnectionsPageContainerProps = ConnectionsPageContainerOwnProps &
  ConnectionsPageContainerDispatchProps &
  ConnectionsPageContainerStateProps;

class ConnectionsPageContainer extends Component<ConnectionsPageContainerProps> {
  public componentDidMount() {
    this.props.fetchServicesForUser(this.props.userId);
  }

  public render() {
    return <ConnectionsPage services={this.props.services} />;
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: ConnectionsPageContainerOwnProps
): ConnectionsPageContainerDispatchProps => {
  return {
    fetchServicesForUser: async (userId: string): Promise<UserService[]> => {
      try {
        const response: AxiosResponse = await axios.get(`/api/servicesForUser?userId=${userId}`);
        dispatch(fetchServicesForUserSuccess(response.data));
        return response.data;
      } catch (error) {
        ownProps.alert.error('Unable to load list of services.');
      }
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    services: state.services,
    userId: state.user ? state.user.sub : undefined
  };
};

export default withAlert(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectionsPageContainer)
);
