import React, { Component, Dispatch } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { setUserServicesState } from '@actions/service.actions';
import ConnectionsPage from '@components/ConnectionsPage';
import ApiService from '@core/api';
import { AppState, UserService } from '@core/types';

interface ConnectionsPageContainerOwnProps {
  alert: InjectedAlertProp;
}

interface ConnectionsPageContainerDispatchProps {
  getUserServices: (userId: string) => Promise<UserService[]>;
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
    console.log('ConnectionsPageContainer mounted');
    this.props.getUserServices(this.props.userId);
  }

  public render() {
    console.log('rendering ConnectionsPageContainer');
    return <ConnectionsPage services={this.props.services} />;
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: ConnectionsPageContainerOwnProps
): ConnectionsPageContainerDispatchProps => {
  return {
    getUserServices: async (userId: string): Promise<UserService[]> => {
      try {
        const api = new ApiService();
        const response = await api.getUserServices(userId);
        dispatch(setUserServicesState(response.data));
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
