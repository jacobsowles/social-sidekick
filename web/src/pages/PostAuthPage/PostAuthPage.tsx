import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { PureComponent, Dispatch } from 'react';
import { InjectedAlertProp, withAlert } from 'react-alert';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { setUserState } from '@actions/user.actions';
import AuthService from '@core/auth';

interface PostAuthPageOwnProps {
  alert: InjectedAlertProp;
}

interface PostAuthPageDispatchProps {
  getUser: () => void;
}

type PostAuthPageProps = PostAuthPageOwnProps & PostAuthPageDispatchProps;

class PostAuthPage extends PureComponent<PostAuthPageProps> {
  public componentDidMount() {
    this.props.getUser();
  }

  public render() {
    return <Redirect to="/home" />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: PostAuthPageOwnProps) => {
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
  )(PostAuthPage)
);
