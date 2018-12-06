import axios, { AxiosResponse } from 'axios';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';

import {
  FetchServicesAction,
  fetchServicesBegin,
  fetchServicesFailure,
  fetchServicesSuccess
} from '@actions/service.actions';
import ConnectionsPage from '@components/ConnectionsPage';
import { AppState, Service } from '@core/types';

interface ConnectionsPageContainerDispatchProps {
  fetchServices: () => void;
}

interface ConnectionsPageContainerStateProps {
  allServices: Service[];
  userId: string;
}

type ConnectionsPageContainerProps = ConnectionsPageContainerDispatchProps &
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
  dispatch: Dispatch<FetchServicesAction>
): ConnectionsPageContainerDispatchProps => {
  return {
    fetchServices: async (): Promise<Service[]> => {
      dispatch(fetchServicesBegin());
      try {
        const response: AxiosResponse = await axios.get('/api/services');
        dispatch(fetchServicesSuccess(response.data));
        return response.data;
      } catch (error) {
        dispatch(fetchServicesFailure(error.message));
      }
    }
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    allServices: state.services.data,
    userId: state.auth.user.user_id
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionsPageContainer);
