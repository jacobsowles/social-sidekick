import axios, { AxiosResponse } from 'axios';
import React, { Component, Dispatch } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

import { setError } from '@actions/error.actions';
import {
  FetchServicesAction,
  fetchServicesBegin,
  fetchServicesSuccess
} from '@actions/service.actions';
import ConnectionsPage from '@components/ConnectionsPage';
import { AppState, Service } from '@core/types';

interface ConnectionsPageContainerOwnProps {
  alert: any;
}

interface ConnectionsPageContainerDispatchProps {
  fetchServices: () => void;
}

interface ConnectionsPageContainerStateProps {
  allServices: Service[];
  userId: string;
}

type ConnectionsPageContainerProps = ConnectionsPageContainerOwnProps &
  ConnectionsPageContainerDispatchProps &
  ConnectionsPageContainerStateProps;

class ConnectionsPageContainer extends Component<ConnectionsPageContainerProps> {
  public componentDidMount() {
    this.props.fetchServices();
    // TODO: fetch user connections
  }

  public render() {
    return <ConnectionsPage allServices={this.props.allServices} />;
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<FetchServicesAction>,
  ownProps: ConnectionsPageContainerOwnProps
): ConnectionsPageContainerDispatchProps => {
  return {
    fetchServices: async (): Promise<Service[]> => {
      dispatch(fetchServicesBegin());
      try {
        const response: AxiosResponse = await axios.get('/api/services');
        dispatch(fetchServicesSuccess(response.data));
        return response.data;
      } catch (error) {
        ownProps.alert.error(error.message);
        dispatch(setError(error.message));
      }
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    allServices: state.services.data,
    userId: state.user ? state.user.user_id : undefined
  };
};

export default withAlert(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectionsPageContainer)
);
