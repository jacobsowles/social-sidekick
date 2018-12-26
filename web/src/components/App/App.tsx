import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { PureComponent, Dispatch } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Action } from 'redux';

import { setUserState, logout } from '@actions/user.actions';
import Layout from '@components/Layout';
import AuthService from '@core/auth';
import { init as initIcons } from '@core/icons';
import { AppState } from '@core/types';

initIcons();

interface AppOwnProps {
  alert: InjectedAlertProp;
}

interface AppDispatchProps {
  getUser: () => void;
  logout: () => void;
}

interface AppStateProps {
  user?: Auth0UserProfile;
}

type AppProps = RouteComponentProps & AppOwnProps & AppDispatchProps & AppStateProps;

class App extends PureComponent<AppProps, AppState> {
  public async componentDidMount() {
    const authService: AuthService = new AuthService();
    if (authService.isAuthenticated() && !this.props.user) {
      await this.props.getUser();
    }
  }

  public render() {
    return <Layout user={this.props.user} handleLogout={this.props.logout} />;
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  ownProps: AppOwnProps
): AppDispatchProps => {
  return {
    getUser: async () => {
      const authService = new AuthService();
      await authService.getUser((error: Auth0Error, user: Auth0UserProfile) => {
        if (user) {
          dispatch(setUserState(user));
        } else {
          ownProps.alert.error(error.error);
        }
      });
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

const mapStateToProps = (state: AppState): AppStateProps => {
  return {
    user: state.user
  };
};

export default withAlert(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
