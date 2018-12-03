import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { Auth0UserProfile } from 'auth0-js';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import {
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserFailure,
  FetchUserAction
} from '@actions/auth.actions';
import Layout from '@components/Layout';
import AuthService from '@core/auth/auth.service';
import { AppState } from '@core/types';

library.add(faCube, faGithub, faQuestionCircle);

interface AppOwnProps {
  authService: AuthService;
}

interface AppDispatchProps {
  fetchUser: () => void;
}

interface AppStateProps {
  isAuthenticated: () => boolean;
}

type AppProps = AppOwnProps & AppDispatchProps & AppStateProps;

class App extends Component<AppProps, AppState> {
  public componentDidMount() {
    debugger;
    if (this.props.isAuthenticated()) {
      this.props.fetchUser();
    }
  }

  public render() {
    debugger;
    return <Layout handleAuthCallback={this.handleAuthCallback} />;
  }

  private handleLogout = (): void => {
    this.props.authService.logout();
    // this.props.setUser(null);
    this.forceUpdate();
  };

  private handleAuthCallback = (nextState: RouteComponentProps): void => {
    debugger;
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.props.authService.handleAuthentication();
    }
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch<FetchUserAction>,
  ownProps: AppOwnProps
): AppDispatchProps => {
  return {
    fetchUser: async () => {
      debugger;
      dispatch(fetchUserBegin());
      try {
        debugger;
        const user: Auth0UserProfile = await ownProps.authService.getAuth0UserProfile();
        debugger;
        return dispatch(fetchUserSuccess(user));
      } catch (error) {
        return dispatch(fetchUserFailure(error));
      }
    }
  };
};

const mapStateToProps = (state: AppState, ownProps: AppOwnProps): AppStateProps => ({
  isAuthenticated: () => ownProps.authService.isAuthenticated()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
