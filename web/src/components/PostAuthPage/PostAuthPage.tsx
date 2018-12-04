import { Auth0Error, Auth0UserProfile } from 'auth0-js';
import React, { PureComponent, Dispatch } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  FetchUserAction,
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserFailure
} from '@actions/auth.actions';
import AuthService from '@core/auth';

interface PostAuthPageDispatchProps {
  fetchUser: () => void;
}

type PostAuthPageProps = PostAuthPageDispatchProps;

class PostAuthPage extends PureComponent<PostAuthPageProps> {
  public componentDidMount() {
    this.props.fetchUser();
  }

  public render() {
    return <Redirect to="/home" />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<FetchUserAction>) => {
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

export default connect(
  null,
  mapDispatchToProps
)(PostAuthPage);
