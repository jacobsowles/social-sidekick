import axios, { AxiosResponse } from 'axios';
import React, { Component, Dispatch } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { fetchConnectionsSuccess } from '@actions/connection.actions';
import { fetchServicesSuccess } from '@actions/service.actions';
import ConnectionsPage from '@components/ConnectionsPage';
import { AppState, Connection, Service } from '@core/types';

interface ConnectionsPageContainerOwnProps {
  alert: any;
}

interface ConnectionsPageContainerDispatchProps {
  fetchConnections: () => Promise<Connection[]>;
  fetchServices: () => Promise<Service[]>;
}

interface ConnectionsPageContainerStateProps {
  connections: Connection[];
  services: Service[];
  userId: string;
}

type ConnectionsPageContainerProps = ConnectionsPageContainerOwnProps &
  ConnectionsPageContainerDispatchProps &
  ConnectionsPageContainerStateProps;

class ConnectionsPageContainer extends Component<ConnectionsPageContainerProps> {
  public componentDidMount() {
    this.props.fetchServices();
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
    fetchConnections: async (): Promise<Connection[]> => {
      try {
        const response: AxiosResponse = await axios.get(
          '/api/connections?userId=auth0|5be62025165bea1f5ba3e665' // TODO: dynamically grab this ID
        );
        dispatch(fetchConnectionsSuccess(response.data));
        return response.data;
      } catch (error) {
        ownProps.alert.error('Unable to load list of connected services.');
      }
    },
    fetchServices: async (): Promise<Service[]> => {
      try {
        const response: AxiosResponse = await axios.get('/api/services');
        dispatch(fetchServicesSuccess(response.data));
        return response.data;
      } catch (error) {
        ownProps.alert.error('Unable to load list of available services.');
      }
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    connections: state.connections,
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
