import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { Dispatch, PureComponent } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { setUserState } from '@actions/user.actions';
import AuthService from '@core/auth';

interface Auth0PostAuthPageOwnProps {
  alert: InjectedAlertProp;
}

interface Auth0PostAuthPageDispatchProps {
  getUser: () => void;
}

type Auth0PostAuthPageProps = Auth0PostAuthPageOwnProps & Auth0PostAuthPageDispatchProps;

class Auth0PostAuthPage extends PureComponent<Auth0PostAuthPageProps> {
  public componentDidMount() {
    this.props.getUser();
  }

  public render() {
    return <Redirect to="/dashboard" />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Auth0PostAuthPageOwnProps) => {
  return {
    getUser: () => {
      const authService = new AuthService();
      authService.getUser((error: Auth0Error, user: Auth0UserProfile) => {
        if (user) {
          dispatch(setUserState(user));
        } else {
          ownProps.alert.error(error.error);
        }
      });
    }
  };
};

export default withAlert(
  connect(
    null,
    mapDispatchToProps
  )(Auth0PostAuthPage)
);
