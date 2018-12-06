import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Action } from 'redux';

import { setError } from '@actions/error.actions';
import { fetchUserSuccess } from '@actions/user.actions';
import Layout from '@components/Layout';
import AuthService from '@core/auth';
import { init as initIcons } from '@core/icons';
import { AppState } from '@core/types';

initIcons();

interface AppDispatchProps {
  fetchUser: () => void;
}

interface AppStateProps {
  error?: string;
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

const mapDispatchToProps = (dispatch: Dispatch<Action>): AppDispatchProps => {
  return {
    fetchUser: () => {
      const authService = new AuthService();
      authService.fetchUser((error: Auth0Error, user: Auth0UserProfile) => {
        if (user) {
          dispatch(fetchUserSuccess(user));
        } else {
          dispatch(setError(error.error));
        }
      });
    }
  };
};

const mapStateToProps = (state: AppState): AppStateProps => {
  return {
    error: state.error,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
