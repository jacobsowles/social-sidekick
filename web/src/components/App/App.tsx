import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  FetchUserAction,
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserFailure
} from '@actions/auth.actions';
import Layout from '@components/Layout';
import AuthService from '@core/auth';
import { init as initIcons } from '@core/icons';
import { AppState } from '@core/types';

initIcons();

interface AppDispatchProps {
  fetchUser: () => void;
}

interface AppStateProps {
  user?: Auth0UserProfile;
}

type AppProps = RouteComponentProps & AppDispatchProps & AppStateProps;

class App extends Component<AppProps, AppState> {
  public componentDidMount() {
    const authService: AuthService = new AuthService();
    if (authService.isAuthenticated() && !this.props.user) {
      this.props.fetchUser();
    }
  }

  public render() {
    return <Layout user={this.props.user} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<FetchUserAction>): AppDispatchProps => {
  return {
    fetchUser: () => {
      const authService = new AuthService();
      dispatch(fetchUserBegin());

      authService.fetchUser((error: Auth0Error, user: Auth0UserProfile) => {
        if (user) {
          dispatch(fetchUserSuccess(user));
        } else {
          dispatch(fetchUserFailure(error.error));
        }
      });
    }
  };
};

const mapStateToProps = (state: AppState): AppStateProps => {
  return {
    user: state.auth.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
