import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Auth0UserProfile } from 'auth0-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUserBegin, fetchUserSuccess, fetchUserFailure } from '@actions/auth.actions';
import Layout from '@components/Layout';
import AuthService from '@core/auth';
import { AppState } from '@core/types';

library.add(faCube, faGithub, faQuestionCircle, faSignOutAlt);

interface AppOwnProps {
  history: any;
  location: any;
  match: any;
}

interface AppDispatchProps {
  fetchUser: (...args: any[]) => any;
}

interface AppStateProps {
  user?: Auth0UserProfile;
}

type AppProps = AppOwnProps & AppDispatchProps & AppStateProps;

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

const mapDispatchToProps = (dispatch: any): AppDispatchProps => {
  return {
    fetchUser: () => {
      const authService = new AuthService();
      dispatch(fetchUserBegin());

      authService.fetchUser((error: any, user: any) => {
        if (user) {
          dispatch(fetchUserSuccess(user));
        } else {
          dispatch(fetchUserFailure(error));
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
